"use client";

import React from "react";
import HelpIcon from "@/public/icons/help.svg";

const HowToChantModal = () => {

  const handleOpen = () => {
    document.getElementById("guide_modal").showModal();
  };

  return (
    <>
      <div
        onClick={handleOpen}
        role="button"
        className="guide w-full flex justify-end gap-3 px-3"
      >
        <h1>how to chant? </h1>
        <HelpIcon style={{ margin: 0, height: "28px", width: "28px" }} />
      </div>
      <dialog id="guide_modal" className="rounded-md max-w-xs">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-gray-500">How to use the om chanting tool:</h4>
          <ol
            start={1}
            className="text-black/40 font-extralight text-sm leading-6"
          >
            <li>
              1. Choose the desired duration in minutes from the first row.
            </li>
            <li>
              2. Select the preferred chanting speed from the bottom section.
            </li>
            <li>
              3. Tap on &apos;Start&apos; and chant along with the recorded
              audio.
            </li>
          </ol>
          <form method="form">
            <button className="chanting-btn bg-gray-400 py-1">close</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default HowToChantModal;
