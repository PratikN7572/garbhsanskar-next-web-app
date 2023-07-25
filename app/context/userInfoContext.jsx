// create a context ( warehouse )
// provider
// consumer / useContext
"use client";

import React, { createContext, useContext, useReducer } from "react";
const initialState = {
  data: {},
  user_plan_type: "",
};

const reducer = (state, action) => {  
  switch (action.type) {
    case "UPDATE_USER_INFO":
      let userType = "";
      if (action.payload?.is_user_paid && Object?.keys(action.payload?.is_user_paid).length === 0 ) {
        userType = 'free_plan'
      } else if (action.payload?.is_user_paid?.free_package) {
        userType = 'free_trial_plan'
      } else if (action.payload?.is_user_paid?.is_paid) {
        userType = 'paid_plan'
      } else {
        userType= "unknown"
      }
     
      return {
        ...state,
        data: { ...state.data, ...action.payload, user_enter_day: action.payload.user_type == 'planner' ? action.payload.user_enter_day : action.payload.user_enetr_pregnancy_day},
        user_plan_type: userType
      };
    default:
      return state;
  }
};
export const UserInfoContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const UserInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserInfoContext.Provider value={{ state, dispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};
export const useUserInfoContext = () => useContext(UserInfoContext);
