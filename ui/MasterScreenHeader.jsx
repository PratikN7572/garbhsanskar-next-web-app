"use client";

import React from "react";
import CustomHeader from "./CustomHeader";
import BackButton from "@/ui/BackButton";
import MasterScreenDialog from "./MasterScreenDialog";

const MasterScreenHeader = () => {

  return (
    <>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton route='/dashboard/home' />
        <h3 className="font-bold text-base capitalize flex-1 text-center">
          story
        </h3>
      <MasterScreenDialog/>
      </CustomHeader>
    </>
  );
};

export default MasterScreenHeader;
