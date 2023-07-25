import React from "react";
import PaymentBanner from "./PaymentBanner";
const Page = () => {
  return (
    <div className="payment_container">
     <PaymentBanner/>
      <div className="bg-black/70 w-1/2 rounded-r-md py-1 mt-3">
        <p className="text-white text-center font-semibold">select your plan</p>
      </div>
      <div className="plan_container flex p-2 w-full">
        <div className="package_option w-full flex justify-between items-center">
           
        </div>
      </div>
    </div>
  );
};

export default Page;
