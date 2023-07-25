"use client";

import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  chantDuration: 61000,
  chantingState: false,
  chantingSpeed: 'short'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CHANT_DURATION":
      return { ...state, chantDuration: action.payload };
    case "TOGGLE_CHANT_STATE":
      return { ...state, chantingState: !state.chantingState || action?.payload };
      case "UPDATE_CHANT_SPEED":
        return { ...state, chantingSpeed: action?.payload };
    default:
      return state;
  }
};

export const OmChantingContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const OmChantingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OmChantingContext.Provider value={{ state, dispatch }}>
      {children}
    </OmChantingContext.Provider>
  );
};
export const useOmChantingContext = () => useContext(OmChantingContext);
