"use client";

import React, { useContext } from "react";
import CustomHeader from "@/ui/CustomHeader";
import BackButton from "../waterCounter/BackButton";
import ToolCard from "@/ui/ToolCard";
import clsx from "clsx";
import { UserInfoContext } from "@/app/context/userInfoContext";

let pregnancyDay = {
  title: "baby size",
  src: "/icons/baby_size.svg",
  task: {
    title: `length`,
    counter: "",
  },
  remainingTask: {
    title: `weight`,
    counter: "",
  },
};

const Page = () => {
  const { state } = useContext(UserInfoContext);
  pregnancyDay = {...pregnancyDay, task: {...pregnancyDay.task, counter: state?.data?.baby_info || ""}, remainingTask:{...pregnancyDay.remainingTask, counter: state?.data?.counter || ""}}
  const initialDate = new Date(`${state?.data?.lmp_date}`);
  const futureDate = new Date(initialDate.getFullYear(), initialDate.getMonth() + 9, initialDate.getDate());
  const formattedDate = futureDate.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit'
  }).replace(/\//g, '/');
  return (
    <>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center h-full justify-between"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase">pregnancy day</h3>
        <div></div>
      </CustomHeader>
      <section id="pregnancy_day" style={{ height: "calc(100% - 128px)" }}>
        {/* {JSON.stringify(state)} */}
        <div className="pregnancy_day_container ml-3 w-full max-w-lg flex flex-col h-3/4 max-h-[700px] justify-between">
          <div>
            <h2 className="font-bold text-center">expected due date</h2>
            <div className="w-full flex justify-center pt-5">
              <h3 className="text-center border border-gray-300 w-32 rounded-md shadow-dark">
                {formattedDate}
              </h3>
            </div>
          </div>

          <ToolCard
            toolbarClass="max-w-[250px] aspect-square"
            remainingTask={pregnancyDay.remainingTask}
            src={pregnancyDay.src}
            task={pregnancyDay.task}
            title={pregnancyDay.title}
            imageClass="w-20"
          />
          <div className="current_day h-20">
            <div className="current_day_container w-full h-full gap-3 ml-1 mx-auto overflow-x-scroll flex">
              {[...Array(40)]
                .map((_, index) => (
                  <div
                    key={index}
                    title={`your baby is ${state.data?.current_week} weeks old`}
                    className={clsx(
                      "w-28 aspect-square rounded-full border border-black text-center grid place-content-center cursor-pointer",
                      {
                        "bg-goodies-step-brown text-white":
                          state.data?.current_week === index + 1,
                      }
                    )}
                  >
                    <p className="leading-4 text-base">{index + 1}</p>
                    <p className="leading-4 text-base">week</p>
                  </div>
                ))
                .slice(state.data?.current_week - 1)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
