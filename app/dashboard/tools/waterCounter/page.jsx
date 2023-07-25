"use client";

import React, {  useMemo, useState } from "react";
import CustomHeader from "@/ui/CustomHeader";
import WaterActivityCounter from "@/ui/WaterActivityCounter";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { format, set } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BackButton from "./BackButton";
import SetWaterTarget from "@/ui/SetWaterTarget";
import {
  WaterCounterContextProvider,
} from "@/app/context/waterCounterContext";
import SetDrinkingWater from "@/ui/SetDrinkingWater";

const Page = () => {

  const [showNotification, setShowNotification] = useState(false);
  const [hour, setHour] = useState(format(new Date('00'), "HH"));
  const [minutes, setMinutes] = useState(format(new Date('00'), "mm"));
  const [showTimer, setShowTimer] = useState(false);

  const defaultTime = useMemo(
    () => set(new Date(), { hours: 12, minutes: 0 }),
    []
  ); // Set the desired default time here

  return (
    <section
      className="water-counter-wrapper"
      style={{ height: "calc(100% - 64px)" }}
    >
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center">
          glass of water
        </h3>
      </CustomHeader>
      <div className="water-counter-container w-full max-w-md max-h-[700px] m-auto flex flex-col p-3 items-center h-3/4 justify-between">
        <div className="w-full flex items-center justify-between">
          <div
            role="button"
            className="flex-1 grid place-content-center text-sm border-r"
            onClick={() => setShowTimer((prev) => !prev)}
          >
            <p className="font-bold text-base">remind me every</p>
            <div className="flex items-center gap-5 justify-around">
              <div className="hour-hand">
                <h4>hour</h4>
                <p className="text-center">{hour}</p>
              </div>
              <div className="minute-hand">
                <h4>min</h4>
                <p className="text-center">{minutes}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid place-content-center gap-[0.2rem] text-sm">
            <p className="font-bold text-base">show notification</p>
            <span
              onClick={() => setShowNotification((prev) => !prev)}
              className={`${
                showNotification
                  ? "border rounded-full border-grey flex items-center cursor-pointer w-7 bg-blue-500 justify-end"
                  : "border rounded-full border-grey flex items-center cursor-pointer w-7 bg-gray-500 justify-start"
              }`}
            >
              <span className="rounded-full border w-3 aspect-square border-grey shadow-inner bg-white"></span>
            </span>
            <p>Status: {showNotification ? "enabled" : "disabled"}</p>
          </div>
        </div>
        <div className="hidden">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileTimePicker
                defaultValue={defaultTime}
                ampm={false}
                onChange={(newTime) => {
                  setHour(format(newTime, "HH"));
                  setMinutes(format(newTime, "mm"));
                }}
                open={showTimer}
                onClose={() => setShowTimer(false)}
              />
            </LocalizationProvider>
          </div>
        <WaterCounterContextProvider>
          <div className="w-1/2">
            <WaterActivityCounter />
          </div>
          <div className="water-tracker flex items-center w-full">
            <SetWaterTarget />
            <SetDrinkingWater/>
          </div>
        </WaterCounterContextProvider>
      </div>
    </section>
  );
};

export default Page;
