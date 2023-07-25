"use client";

import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { PackageDayCounterSkeleton } from "./PackageDayCounter";
import { UserInfoContext } from "@/app/context/userInfoContext";

const PackageDayCounter = dynamic(() => import("@/ui/PackageDayCounter"), {
  ssr: false,
  loading: () => <PackageDayCounterSkeleton />,
});
const PackageDay = () => {
  const { state } = useContext(UserInfoContext);
  return (
      <div
        id="current_module"
        className="package_day_counter_wrapper mt-5 py-2 px-5 w-full text-center shadow-base"
      >
        <h1 className="font-extrabold text-xl mb-3">
          {state.data?.user_type === "planner" ? "package" : "pregnancy"} day
        </h1>
        <PackageDayCounter />
      </div>
  );
};

export default PackageDay;
