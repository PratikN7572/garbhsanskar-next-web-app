"use client";

import { postApiCall } from "@/lib/postApiCall";
import React, { useEffect, useState } from "react";

const ResendButton = () => {
  
  const [user, setUser] = useState({});
 
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    const data = JSON.parse(localStorage?.getItem("user"));
    setUser(data);
    let timer = null;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleClick = async () => {
    setCountdown(60);
    const otpCall = await postApiCall(
      {
        user_key: user.user_key,
        mobile_number: `${user.mobile_number}`,
        send_to: user.send_to,
      },
      `send_forgot_otp_api`,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };
  return (
    <>
      {countdown ? (
        <p className="text-[#666666] m-0 p-0 text-sm place-self-end">
          reset otp in
          <span className="font-bold text-black"> 00 : {countdown} </span>
          sec
        </p>
      ) : (
        <button className="otp_reset_btn" type="submit" onClick={handleClick}>
          resend
        </button>
      )}
    </>
  );
};

export default ResendButton;
