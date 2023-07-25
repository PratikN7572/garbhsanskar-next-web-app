// create a context ( warehouse )
// provider
// consumer / useContext
"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  prefrence: "shloka",
  data: {},
  play: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PREFRENCE":
      return {
        ...state,
        prefrence: action.payload,
      };
    case "SET_DATA":
      console.log('action.payload',action.payload)
      return {
        ...state,
        data: {...action.payload},
      };
    case "PLAY_VIDEO":
      return {
        ...state, play: action.payload
      }
    default:
      return state;
  }
};
export const ShlokaSakhiContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const ShlokaSakhiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ShlokaSakhiContext.Provider value={{ state, dispatch }}>
      {children}
    </ShlokaSakhiContext.Provider>
  );
};
export const useShlokaSakhiContext = () => useContext(ShlokaSakhiContext);
