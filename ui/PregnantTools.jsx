"use client";

import React, { useContext} from "react";
import Link from "next/link";
import ToolCard from "@/ui/ToolCard";
import { UserInfoContext } from "@/app/context/userInfoContext";
let babySize = {
  title: "baby-size",
  src: "/icons/baby_size.svg",
  task: {
    title: "length",
    counter: "",
  },
  remainingTask: {
    title: "weight",
    counter: "",
  },
};
let pregnancyDay = {
  title: "pregnancy day",
  src: "/icons/pregnancy_day.svg",
  task: {
    title: "",
    counter: "today",
  },
  remainingTask: {
    title: "",
    counter: "",
  },
};

const PregnantTools = () => {
  const { state, dispatch } = useContext(UserInfoContext);

 
  pregnancyDay = {
    ...pregnancyDay,
    task: {
      ...pregnancyDay.task,
      title: `${state?.data?.current_day} day` || "121 day",
    },
    remainingTask: {...pregnancyDay.remainingTask, title: `${280 - state?.data?.current_day} days to go`}
  };
  babySize = {
    ...babySize,
    task: {
      ...babySize.task,
      counter: `${state?.data?.baby_info || "-"}`,
    },
    remainingTask: {...babySize.remainingTask, counter: `${280 - state?.data?.baby_info || '-'}`}
  };
  return (
    <>
      <Link href="/dashboard/tools/pregnancyDay" className="tool_link">
        <ToolCard
          src={pregnancyDay.src}
          title={pregnancyDay.title}
          remainingTask={pregnancyDay.remainingTask}
          task={pregnancyDay.task}
          headTitle={null}
          toolbarContainerClass="!items-start"
          imageClass="tool_card_image"
        />
      </Link>
      <Link href="/dashboard/tools/babySize" className="tool_link">
        <ToolCard
          src={babySize.src}
          title={babySize.title}
          remainingTask={babySize.remainingTask}
          task={babySize.task}
          headTitle={null}
          imageClass="tool_card_image"
        />
      </Link>
    </>
  );
};

export default PregnantTools;
