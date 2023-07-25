"use client";

import React from "react";
import { usePathname } from "next/navigation";

import BackButton from "./BackButton";

const PrevButton = ({route}) => {
  const pathname = usePathname();

  return <>{pathname !== "/auth/login" && <BackButton route={route} />}</>;
};

export default PrevButton;
