"use client";

import React, { useContext, useEffect } from "react";
import { ShlokaSakhiContext } from "@/app/context/shlokaSakhiContext";
import PlayIcon from "@/public/icons/ic_play-button.svg";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import clsx from 'clsx'

const ShlokaSakhiVideo = () => {
  const { state, dispatch } = useContext(ShlokaSakhiContext);

  const setPlay = () => {
    dispatch({
      type: 'PLAY_VIDEO',
      payload: !state.play
    })
  }

  const playerConfig = {
    vimeo: {
      playerOptions: {
        fullscreen: false,
      },
    },
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleClick = () => {
    setSeconds(0);
  };
    return (
      <div className="hide-scrollbar w-full h-full">
        {state?.play && (
          <VideoPlayer
            url={state?.prefrence === 'shloka' ? state?.data?.sloka_url : state?.data?.sakhi_url }
            playerConfig={playerConfig}
            handleStop={handleStop}
            handleStart={handleClick}
          />
        )}
        <div className={clsx("flex relative w-[900px] h-5/6 overflow-y-visible mt-7 transition-transform", {
          'translate-x-0': state?.prefrence === 'shloka',
          '-translate-x-[450px]' : state?.prefrence === 'sakhi'
        })}>
          <div className="relative h-full w-full m-auto ">
            <Image
              src={state?.data?.sloka_image}
              alt="shloka"
              fill
              loading="lazy"
            />
            <div className="absolute w-full flex items-center justify-center -bottom-4">
            <button
              onClick={() => setPlay()}
              className="bg-primary-pink flex rounded-md font-semibold items-center gap-2 text-white px-4"
            >
              <PlayIcon className="fill-white" />
              play now
            </button>
          </div>
          </div>
          <div className="relative h-full w-full m-auto ">
            <Image
              src={state?.data?.sakhi_image}
              alt="shloka"
              fill
              loading="lazy"
            />
            <div className="absolute w-full flex items-center justify-center -bottom-4">
            <button
              onClick={() => setPlay()}
              className="bg-primary-pink flex rounded-md font-semibold items-center gap-2 text-white px-4"
            >
              <PlayIcon className="fill-white" />
              play now
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }

export default ShlokaSakhiVideo;
