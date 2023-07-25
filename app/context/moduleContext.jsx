// create a context ( warehouse )
// provider
// consumer / useContext
"use client";

import React, { createContext, useContext, useReducer } from "react";

let initialState = {
  data: {},
};

const reducer = (state, action) => {  
  console.log('state, action in reducer',state, action)
  switch (action.type) {
    case "SET_MODULE":
     
      return {
        ...state, ...action.payload
      };
  }
};
export const ModuleContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const ModuleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModuleContext.Provider value={{ state, dispatch }}>
      {children}
    </ModuleContext.Provider>
  );
};
export const moduleContext = () => useContext(ModuleContext);
