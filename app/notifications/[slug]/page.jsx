"use client";
import CustomHeader from "@/ui/CustomHeader";
import React, { useEffect } from "react";
import BackButton from "./BackButton";

const Page = () => {
  useEffect(() => {
    const notification = JSON.parse(localStorage.getItem("notification"));
    const section = document.getElementById("notification");
    section.innerHTML = notification;
  }, []);
  return (
    <section id="notification_section" className="h-full">
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center">
          notification
        </h3>
      </CustomHeader>
      <div id="notification" className="p-3"></div>
    </section>
  );
};

export default Page;
