"use client";

import React, { useContext, useState } from "react";
import Finger from "@/public/icons/ic_finger.svg";
import SearchBar from "@/ui/SearchBar";
import CustomHeader from "@/ui/CustomHeader";
import BackButton from "./BackButton";
import {
  SearchBarContext,
  SearchBarContextProvider,
} from "@/app/context/searchBarContext";
import SessionCategories from "@/ui/SessionCategories";


const Page = () => {
  
  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   const filtered = items.filter((item) =>
  //     item.title.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredItems(filtered);
  // };
  return (
    <section id="garbhsanskar_sessions" style={{ height: "calc(100% - 64px)" }}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center">
          garbhsanskar books
        </h3>
      </CustomHeader>
      <div
        style={{ height: "calc(100% - 64px)" }}
        className="wrapper_container w-full px-2 flex flex-col items-start justify-between"
      >
          <SearchBarContextProvider>
        <div className="px-4 w-full">
          <div className="flex items-center py-3 justify-start gap-3">
            <span>
              <Finger />
            </span>
            <span>recorded sessions</span>
          </div>
            <SearchBar />
        </div>
          <SessionCategories/>
        </SearchBarContextProvider>
      </div>
    </section>
  );
};

export default Page;
