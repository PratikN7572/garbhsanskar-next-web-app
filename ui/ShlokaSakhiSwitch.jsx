"use client";
import React, { useContext } from "react";
import clsx from "clsx";
import { ShlokaSakhiContext } from "@/app/context/shlokaSakhiContext";
const ShlokaSakhiSwitch = () => {
  const { state, dispatch } = useContext(ShlokaSakhiContext);
  const changePrefrence = (prefrence) => {
    dispatch({
      type: "SET_PREFRENCE",
      payload: prefrence,
    });
    dispatch({
      type: "PLAY_VIDEO",
      payload: false,
    });
  };
  return (
    <div className="switch w-1/2 m-auto relative overflow-hidden bg-gray-300 rounded-md h-10 flex items-center justify-center">
      <button
        onClick={() => changePrefrence("shloka")}
        className={clsx("flex-1 h-full z-10 font-semibold", {
          "text-primary-pink": state?.prefrence === "shloka",
          " text-white": state?.prefrence !== "shloka",
        })}
      >
        shloka
      </button>
      <button
        onClick={() => changePrefrence("sakhi")}
        className={clsx("flex-1 z-10 font-semibold", {
          "text-primary-pink": state?.prefrence === "sakhi",
          " text-white": state?.prefrence !== "sakhi",
        })}
      >
        sakhi
      </button>
      <div
        className={clsx(
          "w-1/2 h-full bg-white absolute transition-transform -z-0",
          {
            "-translate-x-1/2": state?.prefrence === "shloka",
            "translate-x-1/2": state?.prefrence === "sakhi",
          }
        )}
      ></div>
    </div>
  );
};

export default ShlokaSakhiSwitch;
