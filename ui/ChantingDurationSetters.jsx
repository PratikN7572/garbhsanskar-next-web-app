"use client";

import { OmChantingContext } from "@/app/context/omChantingContext";
import clsx from "clsx";
import React, { memo, useCallback, useContext } from "react";

const ChantingDurationSetters = ({ duration }) => {
    const { state, dispatch } = useContext(OmChantingContext)
    const chantDurationSetters = useCallback((duration) => {
            dispatch({
                type: 'UPDATE_CHANT_DURATION',
                payload: duration
            })
        if (state.chantingState) {
            dispatch({
                type: 'TOGGLE_CHANT_STATE',
                payload: false,
            })
        }
            
    }, [dispatch, state.chantingState])
  return (
    <div className="chanting_duration_setters  w-[80%] flex justify-center items-center">
      {duration.map((x, i) => (
        <button
          key={i}
          className={clsx("chanting-btn flex-1 ", {
            "bg-[#F2780B] text-white font-light": state.chantDuration === x.duration,
            "bg-gray-400": state.chantDuration !== x.duration,
          })}
          onClick={() => chantDurationSetters(x.duration)}
        >
          {x.label} min
        </button>
      ))}
    </div>
  );
};

export default memo(ChantingDurationSetters);
