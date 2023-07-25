"use client";
import React, { useContext, useEffect } from "react";

import ShlokaSakhiSwitch from "@/ui/ShlokaSakhiSwitch";
import ShlokaSakhiVideo from "@/ui/ShlokaSakhiVideo";
import getShlokaSakhiData from "@/lib/getShlokaSakhi";
import { ShlokaSakhiContext } from "../context/shlokaSakhiContext";

const ShlokaSakhi = () => {
  const { dispatch } = useContext(ShlokaSakhiContext);
  const getShlokaSakhi = async () => {
    const response = await getShlokaSakhiData();
    console.log(response)
    dispatch({
      type: "SET_DATA",
      payload: response?.data[0],
    });
  };
  useEffect(() => {
    getShlokaSakhi();
  }, []);
  return (
    <div className=" py-3 " style={{ height: "calc(100% - 128px)" }}>
    <ShlokaSakhiSwitch />
      <ShlokaSakhiVideo />
      </div>
  );
};

export default ShlokaSakhi;
