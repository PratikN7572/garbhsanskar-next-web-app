import React from "react";
import "@/styles/addOns.css";
import clsx from "clsx";
import { homeData } from "@/db.js";
import Finger from "@/public/icons/ic_finger.svg";
import Image from "next/image";
import AddOnStatus from "./AddOnStatus";

const AddOns = () => {
  return (
    <div id="addOns" className="addOns_wrapper py-5">
      <div className="font-extrabold max-w-fit text-base flex items-center gap-2 ml-3 mb-3 justify-start">
        <Finger className="w-5 h-5" /> <p> add&ndash;ons</p>
      </div>
      <div className="addOns_tab-grid">
        {homeData["add-ons"].data.map((x, i) => (
          <div
            className="add-on text-center max-w-fit mx-auto relative"
            key={i}
          >
            <Image
              src={x.addOn_image}
              alt="baby's message to its mumma"
              width={130}
              height={130}
              className={clsx("add_on_image rounded-md w-full", {
                locked: x.addOn_status,
              })}
              priority
            />
            <h1 className="bg-[#f3f3f3] text-xs sm:text-sm px-3 py-1 font-semibold rounded-md mt-2 ">
              {x.addOn_name}
            </h1>
            <AddOnStatus/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOns;
