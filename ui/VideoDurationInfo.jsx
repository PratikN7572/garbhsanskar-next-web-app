"use client";

import React, { useContext } from "react";
import ClockIcon from "@/public/icons/ic_clock.svg";
import { ModuleContext } from "@/app/context/moduleContext";
const VideoDurationInfo = () => {
  const { state } = useContext(ModuleContext);
  // const { duration, suitable_time } = state?.data?.[0];
  return (
    <div className="flex items-center gap-3">
      <span className="flex bg-light-gray items-center gap-3 text-primary-white py-1 px-3 rounded-md">
        <ClockIcon className="w-4 fill-white" />
        <p className="m-0">{duration}</p>
      </span>
      <span className="border border-light-gray capitalize font-normal px-2 py-[0.375rem] rounded-md">
        {suitable_time}
      </span>
    </div>
  );
};

export default VideoDurationInfo;
