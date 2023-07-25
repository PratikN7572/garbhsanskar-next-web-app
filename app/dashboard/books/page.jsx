import CustomHeader from "@/ui/CustomHeader";

import React from "react";
import BackButton from "./BackButton";
import BooksList from "@/ui/BooksList";
const Books = () => {
  return (
    <section id='garbhsanskar_books' style={{height: 'calc(100% - 64px)'}}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center">
         garbhsanskar books
        </h3>
      </CustomHeader>
      <div className="books_container flex flex-col w-full gap-5 py-2 overflow-y-scroll" style={{height: 'calc(100% - 64px)'}}>
      <BooksList/>
      </div>
  </section>
  );
};

export default Books;
