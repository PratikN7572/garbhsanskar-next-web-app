import React from "react";
import LikeButton from "./LikeButton";
import VideoDurationInfo from "./VideoDurationInfo";
const VideoInfo = () => {
  return (
    <div className="video_info shadow-base rounded-md">
      <div className="container flex items-center justify-between p-2">
              <LikeButton />
              <VideoDurationInfo/>
      </div>
    </div>
  );
};

export default VideoInfo;
