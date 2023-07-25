"use client";
import React, { useContext } from "react";
import ExploreMoreContent from "./ExploreMoreContent";
import { ModuleContext } from "@/app/context/moduleContext";

const ExploreMore = () => {
  const { state } = useContext(ModuleContext)
  // const {} = state?.data?.[0]
  return (
    <div id="explore_more" className="px-3">
          <h3 className="capitalize font-semibold">explore more</h3>
          <div className="content_container flex items-center gap-2 overflow-x-scroll w-full">
              {[...Array(10)].map((x,i) => <ExploreMoreContent />)}
          </div>
    </div>
  );
};

export default ExploreMore;
