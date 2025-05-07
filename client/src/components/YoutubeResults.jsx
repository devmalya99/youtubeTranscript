import React, { useState } from 'react';
import IngredientsModal from './IngredientsModal';
import VideoCard from './VideoCard';

const YouTubeResults = ({ results }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

  const openIngredientsModal = (videoId, videoTitle) => {
    setSelectedVideoId(videoId);
    setSelectedVideoTitle(videoTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!results || results.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-center text-gray-500 dark:text-gray-400">No videos found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {results.map((video) => (
          <div
            key={video.videoId}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
          >
            {/* Video Player */}
            <VideoCard video={video} />
            
            {/* Video Information */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {video.title}
              </h2>
              
              <div className="flex flex-wrap items-center justify-between text-sm mb-3">
                <p className="text-gray-600 dark:text-gray-300 mr-4 mb-1">
                  {video.channelTitle}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  {new Date(video.publishedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="mt-auto pt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => openIngredientsModal(video.videoId, video.title)}
                  className="flex items-center justify-center px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transition-colors duration-200"
                  aria-label="View ingredients"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Ingredients</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ingredients Modal */}
      <IngredientsModal 
        videoId={selectedVideoId}
        videoTitle={selectedVideoTitle}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default YouTubeResults;