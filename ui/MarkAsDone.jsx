"use client";
import React from "react";
import MarkAsDoneIcon from "@/public/icons/mark_as_done.svg";
import clsx from 'clsx'

const MarkAsDone = ({ onClick }) => {
  return (
    <div className="mark_as_done shadow-base w-full h-12 flex items-center justify-center">
      <button
        onClick={onClick}
        className="border border-primary-pink font-semibold text-primary-pink flex items-center gap-2 bg-white rounded-xl px-4 "
      >
        <MarkAsDoneIcon className={clsx({
          [markIcon] : !!markIcon
        })} /> Mark as done
      </button>
    </div>
  );
};

export default MarkAsDone;
