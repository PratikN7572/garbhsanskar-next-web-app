"use client";

import React from "react";
import MasterScreenVideoPlayer from "./MasterScreenVideoPlayer";
import VideoInfo from "./VideoInfo";
import TipIcon from "@/public/icons/tip_icon.svg";
import ExploreMore from "./ExploreMore";
import ActivityRating from "./ActivityRating";
import MasterTextContent from "./MasterTextContent";


const MasterScreenOne = () => {
  return (
    <div id="master_screen_one" className="h-full">
        <MasterScreenVideoPlayer />
        <VideoInfo />
        <div className="tip px-3 mt-3">
          <div className="tip_container border border-dark-gray border-dashed rounded-md flex items-center justify-center gap-4 py-2">
            <TipIcon className="w-6" />
            <p className="capitalize text-primary-pink font-semibold">
              provides solace
            </p>
          </div>
        </div>
        <MasterTextContent/>
        <ActivityRating />
        <ExploreMore />
    </div>
  );
};

export default MasterScreenOne;
