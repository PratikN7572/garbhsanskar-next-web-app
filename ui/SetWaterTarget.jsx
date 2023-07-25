import { WaterCounterContext } from "@/app/context/waterCounterContext";
import Image from "next/image";
import React, { memo, useCallback, useContext } from "react";

const SetWaterTarget = () => {
  const { state, dispatch } = useContext(WaterCounterContext);

  const incrementWaterTarget = useCallback(() => {
    dispatch({
      type: "INCREMENT_WATER_TARGET",
    });
  }, []);

  const decrementWaterTarget = useCallback(() => {
    if (state.waterTarget !== 0) {
      dispatch({
        type: "DECREMENT_WATER_TARGET",
      });
    }
  }, [state.waterTarget, dispatch]);

  return (
    <div className="set-target flex-1 grid gap-3 place-content-center">
      <h4 className="font-bold text-center">set target</h4>
      <div className="flex items-center gap-3">
        <button
          onClick={incrementWaterTarget}
          className="w-7 font-bold text-white text-center h-7 aspect-square bg-blue-400 rounded-full"
        >
          &#43;
        </button>
        <div className="relative w-12 aspect-square text-center">
          <Image priority src="/images/glass.png" alt="glass filling" fill />
          <p className="font-bold absolute z-10 w-full !h-full grid place-content-center">
            {state.waterTarget}
          </p>
        </div>
        <button
          onClick={decrementWaterTarget}
          className="w-7 font-bold text-white text-center h-7 aspect-square bg-blue-400 rounded-full"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default memo(SetWaterTarget);
