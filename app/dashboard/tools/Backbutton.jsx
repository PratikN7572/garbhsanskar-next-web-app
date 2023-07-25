"use client";

import React from "react";
import PrevButton from "@/public/icons/back_button.svg";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="prev_btn" role="button">
      <PrevButton onClick={() => router.push('/dashboard/home')} height={20} width={20} />
    </div>
  );
};

export default BackButton;
