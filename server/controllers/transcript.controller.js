import { YoutubeTranscript } from 'youtube-transcript';

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
    
    res.json({
      success: true,
      data: mergedTranscript
    });
    
  } catch (error) {
    console.error('Transcript error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch transcript'
    });
  }
};