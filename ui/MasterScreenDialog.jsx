import React from "react";
import QuestionMarkIcon from "@/public/icons/ic_question_mark.svg";

const MasterScreenDialog = () => {
    function openModal() {
        document.getElementById("story_help").showModal();
      }
  return (
    <>
      <QuestionMarkIcon
        onClick={() => openModal()}
        role="button"
        className="w-6 fill-primary-pink"
      />
      <dialog id="story_help" className="p-3 rounded-lg shadow-base">
        <div
          className="story_dialog_container w-full max-w-xs p-3 overflow-y-scroll flex flex-col items-start"
          style={{ height: "calc(100% - 64px)" }}
        >
          <h3 className="capitalize text-2xl font-semibold mb-2">help</h3>
          <h4 className="capitalize font-semibold my-1">objective &#x3a;</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            accusantium culpa quam, ipsam nihil nobis! Cupiditate inventore
            officia repudiandae laboriosam praesentium impedit veritatis ex
            quidem enim, in quod error animi.
          </p>
          <h4 className="capitalize font-semibold my-1">
            how to practice &#x3f;
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            accusantium culpa quam, ipsam nihil nobis! Cupiditate inventore
            officia repudiandae laboriosam praesentium impedit veritatis ex
            quidem enim, in quod error animi.
          </p>
          <form method="dialog" className="m-auto rounded-md overflow-hidden">
            <button className="capitalize bg-light-gray text-white font-semibold px-4 py-1 tracking-widest">
              close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MasterScreenDialog;
