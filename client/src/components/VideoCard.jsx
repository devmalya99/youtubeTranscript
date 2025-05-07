import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoCard = ({ video }) => {
  const { title, channelTitle, publishedAt, videoId } = video;

  return (
    <div className="w-full">
      <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio container */}
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls={true}
          light={false}
          playing={false}
          className="absolute top-0 left-0"
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideoCard;