"use client";

import { OmChantingContext } from "@/app/context/omChantingContext";
import clsx from "clsx";
import React, { useContext} from "react";

const ChantingSpeedSetters = ({ duration }) => {
  const { state, dispatch } = useContext(OmChantingContext);
  return (
    <div className="chanting_speed_setters flex justify-center items-center w-[80%]">
      {duration.map((x, i) => (
        <button
          key={i}
          className={clsx("chanting-btn flex-1", {
            "bg-[#F2780B] text-white font-light": state?.chantingSpeed === x.speed,
            "bg-gray-400": state?.chantingSpeed !== x.speed,
          })}
          onClick={() =>{ dispatch({
            type: 'UPDATE_CHANT_SPEED',
            payload: state.chantingSpeed = x.speed
          })}}
        >
          {x.speed}{state.chantingSpeed}
        </button>
      ))}
    </div>
  );
};

export default ChantingSpeedSetters;
