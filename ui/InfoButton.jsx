"use client";

import React from "react";
import "@/styles/fetusStatusAnimation.css";
import "react-toastify/dist/ReactToastify.css";
import QuestionMark from "@/public/icons/ic_question_mark.svg";
import clsx from 'clsx'
const InfoButton = ({ onClick, infoButtonClass }) => {
  return (
    <>
      <div
        role="button"
        className={clsx({
          [infoButtonClass]: !!infoButtonClass
        })}
      >
        <QuestionMark
          onClick={onClick}
          className="question_icon w-6 fill-primary-pink"
        />
      </div>
    </>
  );
};

export default InfoButton;
