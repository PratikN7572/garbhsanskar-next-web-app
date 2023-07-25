// create a context ( warehouse )
// provider
// consumer / useContext
"use client";

import getSessionCategories from "@/lib/getSessionCategories";
import React, { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  data: {
    items: [],
    filteredItems: [],
  },
};

const reducer = (state, action) => {
  //   console.log("state in state", state);
  switch (action.type) {
    case "SET_ITEMS":

      return {
        ...state,
        data: {
          ...state.data,
          items: action.payload,
          filteredItems: action.payload,
        },
      };

    case "FILTER_ITEMS":
      const filledItems = state?.data?.items;
      let filteredItems = [];
      if (action.payload == "") {
        filteredItems = filledItems;
      } else {
        filteredItems = filledItems.filter((item) =>
          item?.title.toLowerCase().includes(action?.payload.toLowerCase())
        );
      }
      return {
        ...state,
        data: { ...state.data, filteredItems: filteredItems },
      };
    // default:
    //   return state;
  }
};
export const SearchBarContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const SearchBarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getSessionCategoriesApi() {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await getSessionCategories(user?.token);
    console.log('response categories',response)
    dispatch({
      type: "SET_ITEMS",
      payload: response?.data,
    });
  }

  useEffect(() => {
    getSessionCategoriesApi();
  }, []);

  return (
    <SearchBarContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchBarContext.Provider>
  );
};
export const useSearchBarContext = () => useContext(SearchBarContext);
