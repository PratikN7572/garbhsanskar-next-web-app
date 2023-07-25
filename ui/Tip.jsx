"use client";

import { UserInfoContext } from "@/app/context/userInfoContext";
import getTodayTip from "@/lib/getTodayTip";
import getUserInfoData from "@/lib/getUserInfoData";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import handleInfoStatus from "@/utils/handleInfoStatus";
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image'
const Tip = () => {
  const router = useRouter();
  const [tip, setTip] = useState({});
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
  async function userInfoApi(user, uuid) {
    const response = await getUserInfoData(user?.token, uuid);
    if (response?.status === 200) {
      updateUserInfo(response?.data);
      getTodayTipApi(user?.token, state?.user_plan_type, {
        user_key: user?.user_key,
        current_day: user?.current_day,
      });
    } else if (response?.status === 401) {
      toast.error(verifyOtpRes.message, {
        className: "error_toast",
      });
    } else {
      handleInfoStatus(response?.status, router);
    }
  }
  async function getTodayTipApi(token, payment_status, body) {
    const response = await getTodayTip(token, payment_status, body);
    if (response?.status === 200) {
      setTip(response);
    } else if (response?.status === 401) {
      toast.error(verifyOtpRes.message, {
        className: "error_toast",
      });
    } else {
      handleInfoStatus(response?.status, router);
    }
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    userInfoApi(user, user?.device_id);
  }, [state?.data]);

  return (
    <>
      <ToastContainer />
      <div className="relative p-3" style={{ height: "calc(100vh - 64px)" }}>
              {tip?.data?.map(x => <div className="relative w-full h-full"><Image key={x.key} src={x.media_url} alt="" fill /></div>)}
      </div>
    </>
  );
};

export default Tip;
