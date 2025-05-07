import React from 'react';
import TranscriptComponent from './TranscriptComponent';

const YouTubeResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No videos found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-8">
      {results.map((video) => (
        <div
          key={video.videoId}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 space-y-3 w-full"
        >
          {/* Embedded Video */}
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>

          {/* Video Meta */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {video.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{video.channelTitle}</p>
            <p className="text-xs text-gray-400">{new Date(video.publishedAt).toDateString()}</p>
          </div>

          {/* Transcript Component */}
          <div className="text-sm text-gray-700 dark:text-gray-300 max-h-48 overflow-y-auto border-t pt-2 mt-2">
            <TranscriptComponent videoId={video.videoId} />
          </div>
        </div>
      ))}


    </div>
  );
};

export default YouTubeResults;