"use client";

import React from "react";
import InfoButton from "./InfoButton";

const YogaDialog = () => {
  const openYogaInfo = () => {
    document.getElementById("yoga_info").showModal();
  };
  return (
    <>
      <InfoButton onClick={openYogaInfo} />
      <dialog
        id="yoga_info"
        className="max-w-sm h-1/2 rounded-lg pb-0 overflow-hidden p-4"
      >
        <h1 className="font-bold text-2xl mb-2">Help</h1>
        <div
          className="yoga_info_help pl-3 overflow-y-scroll hide-scrollbar"
          style={{ height: "calc(100% - 100px)" }}
        >
          <h2 className="font-bold mb-3">What you will get:</h2>
          <p>
            This app section offers daily yoga and pranayama exercises tailored
            to your specific pregnancy day. The yoga and pranayama routines will
            vary based on your pregnancy day and trimester. However, it&apos;s
            important to note that there are only a limited number of safe and
            appropriate yoga and pranayama exercises during pregnancy so you may
            encounter some repetition in the activities provided.
          </p>
          <h2 className="font-bold my-3">How to Practice?</h2>
          <ul className="list-disc">
            <li>
              Always consult with your doctor before starting any yoga routine
              during pregnancy.
            </li>
            <li>
              Avoid any poses that pressure the abdomen or require lying flat on
              the back after the first trimester.
            </li>
          </ul>

          <h2 className="font-bold my-3">Suggestions : </h2>
          <ul className="list-disc">
            <li>
              It is recommended to practice yoga and pranayama on an empty
              stomach.
            </li>
            <li>
              Always sit on a yoga mat in an open-air space while doing yoga and
              pranayama.
            </li>
            <li>
              Women who have experienced a miscarriage are generally advised to
              avoid any asanas.
            </li>
            <li>
              If you have had uterus surgery with stitches, it is not
              recommended to do any exercises or yoga.
            </li>
            <li>
              Women who have undergone IVF treatments should avoid yoga but can
              practice pranayama. If bed rest is suggested, refrain from
              practicing yoga, but pranayama can be done.
            </li>
            <li>If you have a low-lying placenta, it&apos;s best to avoid yoga.</li>
          </ul>
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

export default YogaDialog;
