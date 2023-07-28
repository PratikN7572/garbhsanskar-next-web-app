import React from "react";
import CustomHeader from "./CustomHeader";
import PrevButton from "./PrevButton";
import DearMomDialog from "./DearMomDialog";
import Image from "next/image";
import babyOne from "@/public/images/ic_create_pass_head.webp";
import DearMomMarkAsDone from "./DearMomMarkAsDone";
const DearMom = () => {
  return (
    <section id="wrapper" style={{ height: "calc(100% - 64px)" }}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <PrevButton route="/dashboard/home" />
        <h3 className="font-bold text-base capitalize tracking-wider flex-1 text-center">
          dear mom
        </h3>
        <DearMomDialog />
      </CustomHeader>
      <div className="wrapper_container bg-gray-100 flex flex-col w-full gap-5 py-2 overflow-y-scroll h-full">
        <div className="container h-full  flex flex-col items-center justify-center gap-10 max-w-sm mx-auto">
          <div>
            <h1 className="text-2xl font-semibold text-center text-dark-gray">
              Dear mom...!
            </h1>
            <h3 className="text-center text-lg text-light-gray">
              Now, my heart beats 80 times per minute.
            </h3>
          </div>
          <div className="relative w-20 aspect-square">
            <Image src={babyOne} alt="" fill />
          </div>
        </div>
      </div>
      <DearMomMarkAsDone />
    </section>
  );
};

export default DearMom;
