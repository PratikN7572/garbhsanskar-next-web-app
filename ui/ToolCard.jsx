import React, { memo } from "react";
import Image from "next/image";
import clsx from "clsx";
import "@/styles/toolCard.css"
const ToolCard = ({ src, title, task, headTitle, remainingTask,toolbarClass, imageClass,toolbarContainerClass }) => {
  const { counter, title: taskTitle } = task || {};
  const {
    counter: remainingCounter,
    title: remainingTitle,
    unit,
  } = remainingTask || {};
  return (
    <div className={clsx("tool_card", {
      [toolbarClass]: !!toolbarClass
    })}>
      {task ? (
        <div className={clsx("tool_card-container ", {
          [toolbarContainerClass]: !!toolbarContainerClass
        })}>
          <div className="left_text">
            <span className="task_title">{taskTitle}</span>
            <span className="text-[13px]">{counter}</span>
          </div>
          <div className="right_text">
            <span className="task_title">{remainingTitle}</span>
            <span className="text-[13px]">
              {remainingCounter} {unit}
            </span>
          </div>
        </div>
      ) : (
        <h3 className="head_title">{headTitle}</h3>
      )}
      {src && (
        <div className={clsx("relative w-12 aspect-square", {
          [imageClass]: !!imageClass
        })}>
          <Image
            src={src}
            alt="baby's message to its mumma"
            priority
            fill
          />
        </div>
      )}
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default memo(ToolCard);
