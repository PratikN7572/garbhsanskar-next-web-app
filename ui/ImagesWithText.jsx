import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

import LockIcon from "@/public/icons/ic_lock.svg";
import Link from "next/link";

export const ImagesWithTextSkeleton = () => {
  return [...Array(12).keys()].map((_, index) => (
    <div key={index} className="activity text-center w-full mx-auto reveal p-4">
      <div className="w-full h-52 bg-slate-200 rounded-md animate-pulse"></div>
      <div className="w-full h-4 mt-1 bg-slate-200 rounded-md animate-pulse"></div>
    </div>
  ));
};

const ImagesWithText = ({ activities }) => {
  const saveModuleKey = (key, name, completed_key) =>{localStorage.setItem('module_info',JSON.stringify({key: key, module_name: name, completed_key: completed_key || ''}))}
  return activities.map((activity) => {
    return (
      <Link
        href={`/activities/${activity.module_key}`}
        className="activity text-center w-full mx-auto reveal p-4"
        key={activity.module_key}
        onClick={()=> saveModuleKey(activity.module_key, activity.module_name)}
      >
        <div className="relative">
          <motion.div
            initial={{ filter: "blur(0)" }}
            whileInView={{ filter: "blur(7px)" }}
            viewport={{ amount: "all" }}
            className="w-full relative overflow-hidden"
          >
            <Image
              src={activity?.module_image}
              alt="baby's message to its mumma"
              width={130}
              height={130}
              className={clsx("rounded-md w-full z-0", {
                locked: activity.is_lock === 1,
              })}
              priority
              sizes="130px"
            />
          </motion.div>
          <motion.div
            className="text-container absolute top-0 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, background: "none" }}
            whileInView={{ opacity: 1, background: "transparent" }}
            viewport={{ amount: "all" }}
          >
            <p className="text-white font-bold text-lg">
              {activity.description}
            </p>
          </motion.div>
          {activity.is_lock === 1 && (
            <div className="lock_icon_badge">
              <span className="text-xs">locked</span>
              <LockIcon className="lock_icon w-4 h-4 z-50" />
            </div>
          )}
        </div>
        <h1
          className={clsx(
            "text-xs sm:text-sm px-3 py-1 mt-1 font-semibold rounded-md bg-gray-200",
            {
              "bg-[#48ac48] text-white ": activity.is_done === 1,
            }
          )}
        >
          {activity.module_name}
        </h1>
      </Link>
    );
  });
};

export default ImagesWithText;
