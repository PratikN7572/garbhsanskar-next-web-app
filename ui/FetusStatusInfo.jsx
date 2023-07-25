"use client";

import React from "react";
import "@/styles/fetusStatusAnimation.css";
import "react-toastify/dist/ReactToastify.css";
import QuestionMark from "@/public/icons/ic_question_mark.svg";

const FetusStatusInfo = () => {
  return (
    <>
      <div
        role="button"
        className="absolute -z-20 right-1 -top-3 bg-transparent"
      >
        <QuestionMark
          onClick={() => document.getElementById('fetus_status_info').showModal()}
          className="question_icon w-6 fill-primary-pink"
        />
      </div>
    </>
  );
};

export default FetusStatusInfo;
