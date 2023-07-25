import React, { memo } from "react";
import LockIcon from "@/public/icons/lock-line-icon.svg";
const PackageLock = ({ state, number, children }) => {
  if (
    state?.user_plan_type === "free_plan" &&
      (number > state?.data?.current_day ||
    number < state?.data?.current_day)
  ) {
    return (
      <div className="pointer-events-none">
        <LockIcon className="w-3 md:w-5" />
        {children}
      </div>
    );
  }else if (
    state?.user_plan_type === "free_trial_plan" &&
    (number < state?.data?.user_enter_day || number > state?.data?.current_day)
  ) {
    return <div className="pointer-events-none">
        <LockIcon className="w-3 md:w-5" />
        {children}
      </div>;
  } else if (
    state?.user_plan_type == "paid_plan" && state?.data?.current_day < number
  ) {
    return <div className="pointer-events-none">
        <LockIcon className="w-3 md:w-5" />
        {children}
      </div>;
  } else {
    return <div className="">
    {children}
  </div>
  }
};

export default memo(PackageLock);
