'use client';
import React, { useState } from 'react';
import './YouTubePlayer.css';

const YouTubePlayer = ({ videoId, thumbnailUrl, title = "Watch Video" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="youtube-player-container">
      <div className="youtube-player-wrapper">
        {!isPlaying ? (
          <div className="video-thumbnail" onClick={handlePlayClick}>
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="thumbnail-image"
            />
            <div className="play-button-overlay">
              <div className="play-button">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M8 5V19L19 12L8 5Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="video-iframe-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubePlayer;