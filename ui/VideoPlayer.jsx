import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({url, playerConfig,handleStop,handleStart}) => {
  
  return (
    <div className="player-wrapper relative w-full aspect-video max-h-52 my-2">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls
              config={playerConfig}
              onBuffer={handleStart}
              onBufferEnd={handleStop}
      />
    </div>
  );
};

export default VideoPlayer;
