import React, { memo, useContext } from "react";
import { WaterCounterContext } from "@/app/context/waterCounterContext";
import Image from "next/image";
const WaterActivityCounter = () => {
  const { state } = useContext(WaterCounterContext);
  return (
    <div className="activity_counter_wrapper w-full aspect-square shadow-base rounded-3xl">
      <div className="activity_counter_container flex flex-col justify-between items-center w-full py-1 px-3 h-full">
        <div className="activity_track flex justify-between w-full">
          <div className="text-sm">
            <p>you drank</p>
            <p className="font-bold">{state.completedWaterCount} glass</p>
          </div>
          <div className="text-sm">
            <p>remain</p>
            <p className="font-bold">
              {state.waterTarget - state.completedWaterCount} glass
            </p>
          </div>
        </div>
        <figure className="relative w-12 h-20">
          <Image
            src="/icons/water_drop.svg"
            alt="baby's message to its mumma"
            priority
            fill
          />
        </figure>
        <h3 className="font-bold">water</h3>
      </div>
    </div>
  );
};

export default memo(WaterActivityCounter);
