"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MarkAsDone from "./MarkAsDone";
import completedActivity from "@/lib/completedActivity";
import getShlokaSakhiData from "@/lib/getShlokaSakhi";
import { useRouter } from 'next/navigation';
import handleInfoStatus from "@/utils/handleInfoStatus";

const ActivityCompleted = () => {
  const [status, setStatus] = useState(0)
  const router = useRouter();

  const apiCall = async () => {
    const shlokaSakhiData = await getShlokaSakhiData();
   
    if (shlokaSakhiData.status === 200) {
      const body1 = {
        isLoveIt: `${shlokaSakhiData?.data[0].is_love_it}`,
        key: `${shlokaSakhiData?.data[0].key}`,
        answerId: `${shlokaSakhiData?.data[0].answer_id}`,
        is_done: shlokaSakhiData?.data[0].is_done === '' ? 0 : shlokaSakhiData?.data[0].is_done,
        type: 'audio',
        data_categories: `${shlokaSakhiData?.data[0].data_categories}`,
      }
      const markAsDone = await completedActivity(body1)
      handleInfoStatus(markAsDone.status, router)
      if (markAsDone.status === 401) {
        toast.error(markAsDone.message, {
          className: "error_toast",
        })
      } 
    }
    handleInfoStatus(shlokaSakhiData.status, router)
    if (shlokaSakhiData.status === 401) {
      toast.error(shlokaSakhiData.message, {
        className: "error_toast",
      })
    }
  }

  return <>
    <ToastContainer/>
    <MarkAsDone onClick={() => apiCall()} /></>;
};

export default ActivityCompleted;
