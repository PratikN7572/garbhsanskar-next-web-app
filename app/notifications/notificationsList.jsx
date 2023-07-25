"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import getNotifications from "@/lib/getNotifications";
import { format, parseISO } from 'date-fns';
import clsx from 'clsx';

export const NotificationsListSkeleton = () => {
  return (
  <>
    {[1,2,3,4]?.map((_, index) => {
      return (
        <div
          key={index}
          className="notification w-full p-3 shadow-base rounded-md bg-slate-200 animate-pulse"
        >
          <div className=" w-full bg-slate-200 animate-pulse h-4"></div>
          <div className="  w-2/3 bg-slate-200 animate-pulse h-4"></div>
          <div className="w-2/3 mr-0 h-4"></div>
        </div>
      );
    })}
    </>
  )
}

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);
  const notification_list_api = async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const notifications_res = await getNotifications(data?.token);
    // console.log(notifications_res)
    if (notifications_res?.status === 401) {
      toast.error(verifyOtpRes.message, {
        className: "error_toast",
      });
    }
    setNotifications(notifications_res?.data?.userAnnouncement);
  };
  useEffect(() => {
    notification_list_api();
  }, []);
  
  function formatDate(dateString) {
    const date = parseISO(dateString);
    return format(date, 'dd MMM, yyyy h:mm a');
  }
  return (
    <>
      <ToastContainer />
      {notifications?.map((notification, index) => {
        const formattedDate = formatDate(notification.created_date);
        return (
          <Link
              href={`/notifications/${notification.id}`}
            key={notification.id}
            className={clsx("notification w-full p-3 shadow-base rounded-md", {
              'bg-[#d3d3d3]': notification.is_read === 0,
              'bg-white': notification.is_read === 1
            })}
            onClick={()=>{localStorage.setItem('notification', JSON.stringify(notification.description))}}
          >
            <h3 className="font-semibold text-sm sm:text-base">{notification.title}</h3>
            <p className=" text-xs sm:text-sm">{notification.short_description}</p>
            <p className="text-xs sm:text-sm text-right text-black/50">{formattedDate}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NotificationsList;
