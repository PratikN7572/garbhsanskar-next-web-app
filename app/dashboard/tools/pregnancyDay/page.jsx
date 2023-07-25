"use client";

import React, { useCallback, useEffect, useState } from "react";
import CustomHeader from "@/ui/CustomHeader";
import BackButton from "../waterCounter/BackButton";
import ToolCard from "@/ui/ToolCard";
import clsx from "clsx";
import getPregnancyDay from "@/lib/getPregnancyDay";
const Page = () => {
  const [pregnancyDay, setPregnancyDay] = useState({});
  const [user, setUser] = useState(0);
  const getPregnancyDayApi = async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const response = await getPregnancyDay(data?.token, data?.current_day);
    console.log(response)
    setPregnancyDay(response);
    setUser(data)
  };
  useEffect(() => {
    getPregnancyDayApi();
  }, []);

  return (
    <section id="pregnancy_day" style={{ height: "calc(100% - 128px)" }}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center h-full justify-between"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase">pregnancy day</h3>
        <div></div>
      </CustomHeader>
      <div className="pregnancy_day_container pl-3 pr-1 w-full max-w-lg flex flex-col h-3/4 max-h-[700px] justify-between">
        <h2 className="font-bold text-center mt-3">{pregnancyDay?.data?.[0]?.message}</h2>
        <ToolCard
          toolbarClass="max-w-[250px] aspect-square"
          remainingTask={pregnancyDay?.data?.[0]?.remainingTask || ""}
          src={pregnancyDay?.data?.[0]?.thumbnail_image}
          task={pregnancyDay?.data?.[0]?.task || ""}
          title={pregnancyDay?.data?.[0]?.title || ""}
          imageClass='w-40'
        />
        <div className="current_day h-20 pr-4">
          <div className="current_day_container w-full h-full gap-3 px-1 mx-auto overflow-x-scroll flex">
            {[...Array(280)]
              .map((day, index) => (
                <div
                  key={index}
                  className={clsx(
                    "w-28 aspect-square rounded-full border border-black text-center grid place-content-center cursor-pointer",
                    {
                      "bg-goodies-step-brown text-white":
                        user?.current_day === index + 1,
                    }
                  )}
                >
                  <p className="leading-4 text-base">{index + 1}</p>
                  <p className="leading-4 text-base">day</p>
                </div>
              ))
              .slice(user?.current_day - 1)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
