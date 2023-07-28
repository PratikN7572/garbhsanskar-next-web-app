"use client";

import React, { useContext } from "react";
import "@/styles/fetusStatus.css";
import dynamic from "next/dynamic";
import { UserInfoContext } from "@/app/context/userInfoContext";
import InfoButton from "./InfoButton";

const FetusStatusAnimationSkeleton = () => {
  return <div className="rounded-full w-full h-full absolute -z-30"></div>;
};

const FetusStatusAnimation = dynamic(
  () => import("@/ui/FetusStatusAnimation"),
  {
    ssr: false,
    loading: () => <FetusStatusAnimationSkeleton />,
  }
);

const FetusStatus = () => {
  const { state } = useContext(UserInfoContext);
  const { babyInfo, current_week } = state?.data;
  function openFetusStatusInfo() {
    document.getElementById('fetus_status_info').showModal();
}
  return (
    <div id="fetus_status" className="fetus_status">
      <div className="fetus_status_grid relative z-0">
        <div className="div1">
          <h2 className="text-sm sm:text-lg text-center">
            {current_week < 4 ? "1" : `${current_week / 4}`}
          </h2>
          <h2 className="text-sm sm:text-lg text-center">months</h2>
        </div>
        <div className="div3">
          <h2 className="div3 text-sm sm:text-lg">{current_week} </h2>
          <h2 className="div3 text-sm sm:text-lg">week</h2>
        </div>
        <div className="div4">
          <h2 className="div4 text-sm sm:text-lg">
            {babyInfo?.baby_height || 0}
          </h2>
          <h2 className="div4 text-sm sm:text-lg">height</h2>
        </div>
        <div className="div5">
          <h2 className="text-sm sm:text-lg text-center">
            {babyInfo?.baby_weight || 0}
          </h2>
          <h2 className="text-sm sm:text-lg text-center">weight</h2>
        </div>

        <FetusStatusAnimation src={babyInfo?.thumbnail_image} />
        <InfoButton
          onClick={openFetusStatusInfo}
          infoButtonClass="absolute -z-20 right-1 -top-3 bg-transparent"
        />
      </div>
    </div>
  );
};

export default FetusStatus;
