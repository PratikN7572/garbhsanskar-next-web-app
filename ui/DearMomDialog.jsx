"use client";

import React from "react";
import InfoButton from "./InfoButton";
const DearMomDialog = () => {
  const openYogaInfo = () => {
    document.getElementById("dearMom_info").showModal();
  };
  return (
    <>
      <InfoButton onClick={openYogaInfo} />
      <dialog
        id="dearMom_info"
        className="max-w-sm h-1/2 rounded-lg pb-0 overflow-hidden"
      >
        <h1 className="font-bold text-2xl mb-2">Help</h1>
        <div
          className="dearMom_info_help pl-3 overflow-y-scroll hide-scrollbar"
          style={{ height: "calc(100% - 100px)" }}
        >
          <h2 className="font-bold mb-3">Objective:</h2>
          <p>
            This app segment features the unborn baby's emotional message to the
            expecting parents. The message is tailored to the mother's stage of
            pregnancy and provides her with a sense of joy while motivating her
            to remain active.
          </p>
          <h2 className="font-bold my-2">How to practice?</h2>
          <p>
            Read the message from your unborn child, tune into your feelings,
            and embrace the experience with joy.
          </p>
          <h2 className="font-bold my-2">Benefits:</h2>
          <h2 className="font-bold my-2">Emotional Connection:</h2>
          <p>
            The app segment allows the unborn baby to communicate an emotional
            message to the expecting parents, helping them create a deeper
            emotional connection with their child.
          </p>
          <h2 className="font-bold my-2">Tailored Message:</h2>
          <p>
            The message is customized to the mother's stage of pregnancy, which
            can provide her with a sense of comfort and assurance.
          </p>
        </div>
        <div className="close-btn sticky bottom-0 bg-white flex justify-center items-center py-3">
          <form method="dialog">
            <button className="bg-light-gray text-white px-5 py-1 rounded-md">
              Close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DearMomDialog;
