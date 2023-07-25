"use client";

import getUserInfoData from "@/lib/getUserInfoData";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { getBrowserFingerprint } from "@/utils/getBrowserFingerprint";
import React, { useCallback, useEffect, useState } from "react";
import UserAccountDetails from "./UserAccountDetails";
const UserInfo = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
  };
  const userinfodata = useCallback(async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data?.token) {
      router.push("/auth/login");
    }
    console.log(data?.device_id)
    const info = await getUserInfoData(data?.token, data?.device_id);
    console.log(info)
    setData((prev) => ({ ...prev, ...info?.data }));
  }, [data?.device_id]);

  useEffect(() => {
    // userinfo api call
    userinfodata();
  }, [userinfodata]);

  const onSubmit = (values, actions) => {
    // Handle form submission
  };

  const filteredKeys = ["full_name", "email", "mobile_number"];

  return (
    <div
      className="flex flex-col justify-between items-center w-full py-5"
      style={{ maxHeight: "calc(100% - 64px)", height: "calc(100% - 64px)" }}
    >
      <div className="user_information w-5/6">
        <div className="bg-primary-pink text-white text-left px-3 py-1 shadow-base">
          <h4 className="capitalize">your informatiion</h4>
        </div>
        <UserAccountDetails
          data={data}
          filteredKeys={filteredKeys}
          initialValues={initialValues}
        />
      </div>
      <div className="partner_information w-5/6">
        <div className="bg-primary-pink text-white text-left px-3 py-1 shadow-base">
          <h4 className="capitalize">partner informatiion</h4>
        </div>
        <UserAccountDetails
          data={data}
          filteredKeys={filteredKeys}
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </div>
      <div className="buttons w-5/6 flex justify-between items-center">
        <button className="btn ">save</button>
        <button className="btn" onClick={() => router.push("/dashboard/home")}>
          close
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
