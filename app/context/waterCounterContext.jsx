import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  waterTarget: 0,
  completedWaterCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_WATER_TARGET":
      return { ...state, waterTarget: state.waterTarget + 1 };
    case "DECREMENT_WATER_TARGET":
      return {...state, waterTarget: state.waterTarget - 1 };
    case "INCREMENT_WATER_COUNT":
      return {...state, completedWaterCount: state.completedWaterCount + 1 };
    case "DECREMENT_WATER_COUNT":
      return {...state, completedWaterCount: state.completedWaterCount - 1 };
    case "RESET_WATER_TARGET":
      return {...state, waterTarget: 0 };
    case "RESET_WATER_COUNT":
      return {...state, completedWaterCount: 0 };
    default:
      return state;
  }
};

export const WaterCounterContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const WaterCounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WaterCounterContext.Provider value={{ state, dispatch }}>
      {children}
    </WaterCounterContext.Provider>
  );
};
export const useUserInfoContext = () => useContext(WaterCounterContext);
