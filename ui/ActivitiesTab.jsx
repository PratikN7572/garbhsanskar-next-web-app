"use client";

import React, { useEffect, useState, memo, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/activitiesTab.css";
import dynamic from "next/dynamic";
import getActivities from "@/lib/getActivities";
import { ImagesWithTextSkeleton } from "./ImagesWithText";
import { UserInfoContext } from "@/app/context/userInfoContext";

const ImagesWithText = dynamic(() => import("./ImagesWithText"), {
  ssr: true,
  loading: () => <ImagesWithTextSkeleton />,
});

export const ActivitiesTabSkeleton = () => {
  <div id="activity_tab" className="activity_tab ">
    <h1 className="mb-3 font-extralight tracking-wide">
      your today&apos;s
      <span className="font-extrabold text-primary-pink">10 / 10</span>
      activities left
    </h1>
    <div className="activities_tab-grid h-80">
      <div className="h-72 w-full p-4 bg-slate-200 animate-pulse"> </div>
      <div className="h-72 w-full p-4 bg-slate-200 animate-pulse"> </div>
    </div>
  </div>;
};
const ActivitiesTab = () => {
  const { state } = useContext(UserInfoContext);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async (current_day) => {
      const data = JSON.parse(localStorage?.getItem("user"));
      const response = await getActivities(data.token, {
        user_key: data?.user_key,
        current_day: current_day,
      });
      console.log("response activities", response);
      if (response?.status === 200) {
        setActivities(response.data);
      }
      if (response?.status === 401) {
        toast.error(response.message, {
          className: "error_toast",
        });
      }
    };
    if (state?.data?.current_module) {
      fetchActivities(state?.data?.current_module);
    }
  }, [state?.data?.current_module]);

  const activitiesLeft = activities.filter((x) => x.is_done !== 1).length;
  const totalActivities = activities.length;

  return (
    <>
      <div id="activity_tab" className="activity_tab ">
        <h1 className="mb-3 font-extralight tracking-wide">
          your today&apos;s
          <span className="font-extrabold text-primary-pink">
            {` ${activitiesLeft} / ${totalActivities} `}
          </span>
          activities left
        </h1>
        <div className="activities_tab-grid">
          <ImagesWithText activities={activities} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default memo(ActivitiesTab);
