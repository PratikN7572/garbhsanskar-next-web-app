import CustomHeader from "@/ui/CustomHeader";
import React from "react";
import BackButton from "./BackButton";
import Image from "next/image";
import WebCameraButton from "@/ui/WebCameraButton";

const Page = () => {
  return (
    <section style={{ height: "calc(100% - 64px)" }}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center">
          photo memory
        </h3>
      </CustomHeader>
      <div
        className="babyBump_container flex flex-col items-center"
        style={{ height: "calc(100% - 64px)" }}
      >
        <h3 className="text-center">take photo of your baby bump</h3>
       <WebCameraButton/>
        <div
          style={{
            width: "230px",
            aspectRatio: "1/1",
          }}
          className="flex px-3 bg-gray-200 justify-between rounded-lg shadow-base"
        >
          <p
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(-180deg)",
              textAlign: "center" /* Correct rotation direction */,
            }}
          >
            #ifollowgarbhsanskar
          </p>
          <div className="relative flex-1 w-20 aspect-square">
            <Image priority src="/icons/baby_size.svg" alt="baby_size" fill />
          </div>
          <p
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(-180deg)",
              textAlign: "center" /* Correct rotation direction */,
            }}
          >
            #ifollowgarbhsanskar
          </p>
        </div>
        <div className="w-full h-32 overflow-x-scroll px-3">
          <div className="h-full flex gap-3 overflow-x-scroll">
           {[...Array(10)].map((_, i)=>(<div key={i} className="w-100 h-100 aspect-square bg-red-500"></div>))
        }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
