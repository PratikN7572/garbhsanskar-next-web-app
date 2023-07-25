"use client";

import React, { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import { UserInfoContext } from "@/app/context/userInfoContext";
import PackageLock from "./PackageLock";
export const PackageDayCounterSkeleton = () => {
  return (
    <>
      <div className="day_counter w-full flex items-center justify-between py-4">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
          return (
            <p
              className="w-9 aspect-square animate-pulse bg-slate-200"
              key={index}
            ></p>
          );
        })}
      </div>
      <p className="w-24 h-3 mt-5 mx-auto animate-pulse bg-slate-200"></p>
    </>
  );
};

const PackageDayCounter = () => {
  const { state, dispatch } = useContext(UserInfoContext);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const newNumbers = [...Array(7).keys()].reduce((acc, curr) => {
      if (state?.data?.current_day > 3) {
        acc.push(curr + (state?.data?.current_day - 3));
      } else {
        acc.push(curr + (state?.data?.current_day - (state?.data?.current_day - 1)));
      }
      return acc;
    }, []);
    setNumbers(newNumbers);
  }, []);

  const handleModuleClick = (number) => {
    dispatch({
      type: "UPDATE_USER_INFO",
      payload: { ...state.data, current_module: number },
    });
  };

  return (
    <>
      <div className="day_counter w-full flex items-center justify-between">
        {numbers.map((number, index) => {
          return (
            <div
              className="flex flex-col items-center justify-between"
              key={index}
            >
              <PackageLock number={number} state={state} > <p
                onClick={() => handleModuleClick(number)}
                role="button"
                className={clsx("text-[10px]", {
                  "text-red-500 pointer-events-none !text-2xl border-r border-l px-3 font-bold border-black":
                    state?.data?.current_module === number,
                  "text-sm":
                    index ===
                      numbers.findIndex(
                        (element) => element === state?.data?.current_day + 1
                      ) ||
                    index ===
                      numbers.findIndex(
                        (element) => element === state?.data?.current_day - 1
                      ),
                })}
              >
                {`${number}`}
              </p></PackageLock>
             
            </div>
          );
        })}
      </div>
      <h1 className="font-extralight text-[#666666] mt-3 tracking-wider">
        {state?.data?.user_type === "planner" ? 90 - state?.data?.current_day : 280 - state?.data?.current_day} days
        left
      </h1>
    </>
  );
};

export default PackageDayCounter;
