import { YoutubeTranscript } from 'youtube-transcript';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getTranscript = async (req, res) => {
  try {
    const { videoId } = req.params;
    const { lang = 'en' } = req.query;
    
    // Fetch transcript chunks
    const transcriptChunks = await YoutubeTranscript.fetchTranscript(videoId);
    
    // Combine all chunks into one object
    const mergedTranscript = {
      videoId,
      language: lang,
      fullText: transcriptChunks.map(chunk => chunk.text).join(' '),
      totalDuration: transcriptChunks.length > 0 
        ? transcriptChunks[transcriptChunks.length - 1].offset + 
          (transcriptChunks[transcriptChunks.length - 1].duration || 0)
        : 0,
      wordCount: transcriptChunks
        .reduce((count, chunk) => count + chunk.text.split(/\s+/).length, 0)
    };

     // 2. Prepare the Gemini prompt
     const prompt = `
     Extract a clean, point-wise list of ingredients along with its english translation .like an array of objects in json format and make sure to remove any duplicacies in the array. Return only the clean list from the following cooking transcript. 
     Ignore instructions or cooking steps — only return ingredients mentioned with quantity if available.
     
     Transcript:
     "${mergedTranscript.fullText}"
     `;
     
         // 3. Send to Gemini
         const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
         const result = await model.generateContent(prompt);
         const response = await result.response;
         const ingredientsText = response.text();



    // 4. Respond with Gemini output
    res.json({
      success: true,
      data: {
        ...mergedTranscript,
        ingredients: ingredientsText
      }
    });
    
  } catch (error) {
    console.error('Transcript or Gemini error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch transcript or parse from gemini'
    });
  }
};