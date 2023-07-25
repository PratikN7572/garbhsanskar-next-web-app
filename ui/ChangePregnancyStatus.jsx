"use client";

import React, { useContext, useMemo } from "react";
import CheckIcon from "@/public/icons/ic_check.svg";
import clsx from "clsx";

import CloseButton from "@/public/icons/cross_circle.svg";
import DatePicker from "./DatePicker";
import { UserInfoContext } from "@/app/context/userInfoContext";

const ChangePregnancyStatus = () => {
    const { state, dispatch } = useContext(UserInfoContext);
    const attemptMessage = useMemo(
      () =>
        `${state?.data?.totalPregnancyStatusAttempt} attempts left...`,
      [state?.data?.totalPregnancyStatusAttempt]
    );

  return (
    <>
      {attemptMessage && (
        <p className="text-xs text-primary-pink">{attemptMessage}</p>
      )}
      {state?.data?.totalPregnancyStatusAttempt !== 0 && (
        <dialog id="pregStatus_modal" className="rounded-lg overflow-hidden">
          <div className="modal-container flex flex-col justify-center items-center p-5 gap-3 relative">
            {/* <form method="dialog">
                <button data-toggle="modal" data-target="#myModal">
                  <CloseButton className="absolute -top-2 -right-1" />
                </button>
              </form> */}
            <h3 className="text-center font-semibold">
              select pregnancy status
            </h3>
            <div className="flex gap-3 items-center justify-between">
              <div
                className={clsx("signee_status", {
                  signee_current_status: state?.data.user_type === "pregnant",
                })}
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                    document.getElementById("date_picker").showModal();
                  dispatch({
                    type: "UPDATE_USER_INFO",
                    payload: {
                      ...state,
                      totalPregnancyStatusAttempt:
                        state?.data?.totalPregnancyStatusAttempt - 1,
                      user_type: "pregnant",
                    },
                  });
                }}
              >
                <p>pregnant</p>
                {state?.data?.user_type === "pregnant" && (
                  <span className="absolute -top-4 -right-4">
                    <CheckIcon className="w-7 aspect-square fill-green-500" />
                  </span>
                )}
              </div>
              <div
                className={clsx("signee_status", {
                  signee_current_status: state?.data.user_type === "planner",
                })}
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                    document.getElementById("date_picker").showModal();
                  dispatch({
                    type: "UPDATE_USER_INFO",
                    payload: {
                      ...state,
                      totalPregnancyStatusAttempt:
                        state?.data?.totalPregnancyStatusAttempt - 1,
                      user_type: "planner",
                    },
                  });
                }}
              >
                <p>planner</p>
                {state?.data?.user_type === "planner" && (
                  <span className="absolute -top-4 -right-4">
                    <CheckIcon className="w-7 aspect-square fill-green-500" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </dialog>
      )}
      <DatePicker pregnancyStatus={state?.data?.user_type} />
    </>
  );
};

export default ChangePregnancyStatus;
