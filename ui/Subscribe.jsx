"use client";

import { UserInfoContext } from "@/app/context/userInfoContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Subscribe = () => {
  const { state } = useContext(UserInfoContext)
  if (state?.user_plan_type !== 'paid_plan') {
    const router = useRouter()
    return (
      <div role="button" onClick={()=> router.push('/payment')} className="subscription_status">
        <span>&#9734;</span>
        <p> subscribe</p>
      </div>
    );
  } else {
    return (
      <div role="button" className="subscribed">
        <p className="text-white text-sm font-semibold">#ProudParent</p>
      </div>
    );
  }
   
};

export default Subscribe;
