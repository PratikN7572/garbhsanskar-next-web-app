import clsx from "clsx";
import React from "react";
import "@/styles/button.css";
const Button = ({ btnClass, buttonLabel, ...props }) => {
  return (
    <button
      className={clsx("btn_primary", {
        [btnClass]: !!btnClass,
      })}
      {...props}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
