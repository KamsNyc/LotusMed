import React from 'react';

interface SecondVideoProps {
  onVideoEnd: () => void; 
}

const SecondVideo: React.FC<SecondVideoProps> = ({ onVideoEnd }) => {
  return (
    <div className="video-container bg-[#170B3B]">
      <video autoPlay className="w-screen h-screen object-cover" onEnded={onVideoEnd}>
        <source src="/second.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SecondVideo;