"use client";
import React, { useEffect, useState } from 'react'
import OtpOptions from './OtpOptions';

const ChangeNumberOptionsScreen = () => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const data = localStorage.getItem('user')
        setUserData(data)
    }, [])
    const sendOtp = async (values, actions) => {
        const submitValues = {
          ...values,
          mobile_number: `${userData.mobile_number}`,
          user_key: userData.user_key,
        };
        // console.log('submitValues', submitValues, userData);
        localStorage.setItem("user", JSON.stringify({ ...userData, send_to: values.send_to }));
        const otpCall = await postApiCall(submitValues, "send_opt", {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        });
        actions.setSubmitting(false);
        if (otpCall.status === 200) {
          router.push("/auth/otpVerification");
        } else {
          toast.error(otpCall.message, {
            className: "error_toast",
          });
        }
      };
  return (
    <OtpOptions user={userData} id={"otpPopUp"} onSubmit={sendOtp} />
  )
}

export default ChangeNumberOptionsScreen