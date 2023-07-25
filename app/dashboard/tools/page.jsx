"use client";

import React, { useCallback, useContext, useEffect } from "react";
import CustomHeader from "@/ui/CustomHeader";
import ToolCard from "@/ui/ToolCard";
import Link from "next/link";
import BackButton from "./Backbutton";
import PregnantTools from "@/ui/PregnantTools";
import { WaterCounterContextProvider } from "@/app/context/waterCounterContext";
import WaterCounterTool from "@/ui/WaterCounterTool";
import { UserInfoContext } from "@/app/context/userInfoContext";
import { useRouter } from "next/navigation";
import getUserInfoData from "@/lib/getUserInfoData";
import handleInfoStatus from "@/utils/handleInfoStatus";
const cardData = {
  stepCounter: {
    title: "step",
    src: "/images/step.webp",
    task: {
      title: "step",
      counter: 0,
    },
    remainingTask: {
      title: "distance",
      counter: "0.00",
      unit: "km",
    },
  },
  babyBump: {
    title: "baby bump",
    headTitle: "take photo",
    src: "/icons/camera.svg",
  },
  omChanting: {
    title: "om chanter",
    headTitle: "daily guided",
    src: "/icons/om.svg",
  },
};

const Tools = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(UserInfoContext);
  const updateUserInfo = useCallback(
    (param) => {
      dispatch({
        type: "UPDATE_USER_INFO",
        payload: { ...param, current_module: param?.current_day },
      });
    },
    [dispatch]
  );

  const getUserInfo = useCallback(async () => {
    const data = JSON.parse(localStorage?.getItem("user"));
    if (!data?.token) {
      router.push("/auth/login");
    }
    const info = await getUserInfoData(data?.token, data?.device_id);
    console.log('info',info)
    handleInfoStatus(info?.status, router, info?.message);
    localStorage?.setItem(
      "user",
      JSON.stringify({ ...data, current_day: info?.data?.current_day })
    );
    updateUserInfo(info?.data);
  }, [router, updateUserInfo]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <section style={{ height: "calc(100% - 64px)" }} className="tools_wrapper">
      <CustomHeader
        wrapperClass="border-b-2 border-primary-pink"
        containerClass="flex  items-center h-full justify-between"
      >
        <BackButton />
        <h3 className="font-bold flex-1 text-center">goodies</h3>
      </CustomHeader>
      <div
        style={{ height: "calc(100% - 64px)" }}
        className="grid grid-cols-1 xs:grid-cols-2 sm:gap-5 px-3 overflow-y-scroll py-3"
      >
        {/* {JSON.stringify(state)} */}
        {state?.data?.user_type === "pregnant" && <PregnantTools />}
        <ToolCard
          src={cardData.stepCounter.src}
          title={cardData.stepCounter.title}
          remainingTask={cardData.stepCounter.remainingTask}
          task={cardData.stepCounter.task}
          headTitle={null}
          imageClass="tool_card_image"
        />
        <WaterCounterContextProvider>
          <WaterCounterTool />
        </WaterCounterContextProvider>

        <Link href="/dashboard/tools/babyBump" className="tool_link">
          <ToolCard
            src={cardData.babyBump.src}
            headTitle={cardData.babyBump.headTitle}
            title={cardData.babyBump.title}
            imageClass="tool_card_image"
          />
        </Link>
        <Link href={"/dashboard/tools/omchanting"} className="tool_link">
          <ToolCard
            src={cardData.omChanting.src}
            headTitle={cardData.omChanting.headTitle}
            title={cardData.omChanting.title}
            imageClass="tool_card_image"
          />
        </Link>
      </div>
    </section>
  );
};

export default Tools;
