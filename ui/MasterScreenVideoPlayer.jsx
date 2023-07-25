"use client";

import React, { useContext } from "react";
import VideoPlayer from "./VideoPlayer";
import { ModuleContext } from "@/app/context/moduleContext";

const MasterScreenVideoPlayer = () => {
  const { state } = useContext(ModuleContext)
  const url = state?.data?.[0]?.file_url

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleClick = () => {
    setSeconds(0);
  };

  const playerConfig = {
    vimeo: {
      playerOptions: {
        fullscreen: false,
      },
    },
  };

  return (
    <>
      {url !== "" && (
        <div className="player-wrapper relative w-full aspect-video max-h-52 mb-2">
          <VideoPlayer
            url={url}
            playerConfig={playerConfig}
            handleStop={handleStop}
            handleStart={handleClick}
          />
        </div>
      )}
    </>
  );
};

export default MasterScreenVideoPlayer;
