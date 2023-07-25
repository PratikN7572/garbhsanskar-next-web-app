"use client";

import React from "react";
import ShlokaSakhi from "./shlokaSakhi";
import { ShlokaSakhiContextProvider } from "../context/shlokaSakhiContext";

const Page = () => {
  
  return (
    
      <ShlokaSakhiContextProvider>
        <ShlokaSakhi />
        </ShlokaSakhiContextProvider>
  );
};

export default Page;
