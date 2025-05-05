import { useState, useEffect } from 'react';
import { YoutubeTranscript } from 'youtube-transcript';
const TranscriptComponent = ({ videoId }) => {
  const [transcript, setTranscript] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      setLoading(true);
      try {
        // Dynamic import to handle module issues
       
        const transcriptChunks = await YoutubeTranscript.fetchTranscript(videoId);
        setTranscript(transcriptChunks);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching transcript:', err);
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchTranscript();
    }
  }, [videoId]);

  if (loading) return <div>Loading transcript...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="transcript">
      {transcript.map((entry, index) => (
        <p key={index}>
          <span className="timestamp">
            {new Date(entry.offset).toISOString().substr(11, 8)}:
          </span>
          {entry.text}
        </p>
      ))}
    </div>
  );
};

export default TranscriptComponent;