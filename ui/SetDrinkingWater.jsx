import { WaterCounterContext } from "@/app/context/waterCounterContext";
import Image from "next/image";
import React, { memo, useCallback, useContext } from "react";

const SetDrinkingWater = () => {
  const { state, dispatch } = useContext(WaterCounterContext);

  const resetCounter = useCallback(() => {
    dispatch({
      type: "RESET_WATER_COUNT",
    });
    dispatch({
      type: "RESET_WATER_TARGET",
    });
  }, [dispatch]);

  const incrementWaterCount = useCallback(() => {
    if (
      state.waterTarget !== 0 &&
      state.completedWaterCount < state.waterTarget
    ) {
      dispatch({
        type: "INCREMENT_WATER_COUNT",
      });
    }
    if (state.completedWaterCount + 1 === state.waterTarget) {
      dispatch({
        type: "INCREMENT_WATER_COUNT",
      });
      resetCounter();
    }
  }, [state.completedWaterCount, state.waterTarget, dispatch, resetCounter]);

  const decrementWaterCount = useCallback(() => {
    if (state.completedWaterCount !== 0) {
      // setWaterCount((prevWaterCount) => prevWaterCount - 1);
      dispatch({
        type: "DECREMENT_WATER_COUNT",
      });
    }
  }, [state.completedWaterCount, dispatch]);

  return (
    <div className="drink-water gap-3 flex-1 border-l grid place-content-center">
      <h4 className="font-bold text-center">drink water</h4>
      <div className="flex items-center gap-3">
        <button
          onClick={incrementWaterCount}
          className="w-7 font-bold text-white text-center h-7 aspect-square bg-blue-400 rounded-full"
        >
          &#43;
        </button>
        <div className="relative w-12 aspect-square text-center">
          <Image priority src="/images/glass.png" alt="glass filling" fill />
          <p className="font-bold absolute z-10 w-full !h-full grid place-content-center">
            {state.completedWaterCount}
          </p>
        </div>
        <button
          onClick={decrementWaterCount}
          className="w-7 font-bold text-white text-center h-7 aspect-square bg-blue-400 rounded-full"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default memo(SetDrinkingWater);
