"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { memo, useEffect } from "react";

const CustomHeader = ({ children, wrapperClass, containerClass }) => {
  const router = useRouter()
  useEffect(() => {
      const data = JSON.parse(localStorage.getItem('user'));
      if (!data.token) {
          router.push('/auth/login')
      }
  }, [router])
  return (
      <div className={clsx("custom_header_wrapper w-full h-16 shadow-base bg-white", {
        [wrapperClass]: !!wrapperClass
    })}>
          <div className={clsx("header_container w-full h-full p-1", {
          [containerClass]: !!containerClass
      })}>{children}</div>
    </div>
  );
};

export default memo(CustomHeader);
