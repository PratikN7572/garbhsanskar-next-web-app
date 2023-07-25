"use client";

import React from "react";
import ChantingDurationSetters from "@/ui/ChantingDurationSetters";
import ChantingSpeedSetters from "@/ui/ChantingSpeedSetters";
import HowToChantModal from "@/ui/HowToChantModal";
import OmChanting from "@/ui/OmChanting";
import dynamic from 'next/dynamic'
// const { OmChantingContextProvider } = dynamic(()=>import("@/app/context/omChantingContext"), {ssr: false}) ;
import { OmChantingContextProvider } from "@/app/context/omChantingContext"
import CustomHeader from "@/ui/CustomHeader";
import BackButton from "./BackButton";

const duration = [
  {
    label: "1",
    duration: 61000,
    speed: "short",
    // audio: shortAudio
  },
  {
    label: "3",
    duration: 181000,
    speed: "medium",
    // audio: shortAudio
  },
  {
    label: "5",
    duration: 301000,
    speed: "long",
    // audio: shortAudio
  },
];

const Page = () => {
  return (
    <div id="om_chanting_tool" className="h-full">
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center">
          om chanting
        </h3>
      </CustomHeader>
      <HowToChantModal />
      <div className="omchanting_tool_wrapper w-full" style={{height: 'calc(100% - 150px)'}}>
        <div className="omchanting_tool_container w-full h-full flex flex-col md:gap-3 items-center justify-center">
          <OmChantingContextProvider>
            <ChantingDurationSetters duration={duration} />
            <OmChanting />
            <ChantingSpeedSetters duration={duration} />
          </OmChantingContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Page;
