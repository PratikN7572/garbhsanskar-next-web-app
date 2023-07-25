"use client";

import React, { useEffect, useState } from "react";
import Button from "@/ui/Button";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "@/styles/datepicker.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { postApiCall } from "@/lib/postApiCall";
import { useRouter } from "next/navigation";

const DatePicker = ({ pregnancyStatus, ...props }) => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);
  let today = new Date();
  let plannerCourse = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000 * 3);
  let pregnancyCourse = new Date(
    today.getTime() - 40 * 24 * 60 * 60 * 1000 * 7
  );
  let calenderConfig;
  if (pregnancyStatus === "planner") {
    calenderConfig = {
      maxDate: new Date(),
      minDate: plannerCourse,
    };
  } else {
    calenderConfig = {
      maxDate: new Date(),
      minDate: pregnancyCourse,
    };
  }
  // this state sets the current calender date
  const [lmpDate, setLmpDate] = useState("");
  const handleChange = (date) => {
    setLmpDate(format(date, "yyyy-MM-dd"));
  };

  // submit button click for api calls:
  const handleClick = async () => {
    try {
      const pregStatusRes = await postApiCall(
        { user_type: pregnancyStatus },
        "change_pregnancy_status",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const lmpDateRes = await postApiCall(
        {
          user_key: user.user_key,
          lmp_date: lmpDate,
        },
        "change_lmp_date_api",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      Promise.all([pregStatusRes, lmpDateRes]).then(() => {
        // Both POST requests have completed successfully
      // Do something with post1Response and post2Response
        localStorage.setItem('user',JSON.stringify({...user, user_type: pregnancyStatus}))
        router.push("/dashboard/home");
      });
    } catch (error) {
      console.error(error);
    }
  };

  // a function that closes the dialog box. ( placed on the cancel button )
  const closeModal = () => {
    document.getElementById("date_picker").hideModal();
  };

  return (
    <>
      <dialog id="date_picker">
        <div className="calender_wrapper">
          <h1 className="text-sm text-center text-primary-pink font-bold">
            select your Last Menstrual Period Date &#40;LMP&#41;
          </h1>
          <Calendar
            date={new Date()}
            onChange={handleChange}
            className="calenderElement"
            {...calenderConfig}
            {...props}
          />
          <div className="flex justify-between items-center w-full">
            <Button
              buttonLabel={"submit"}
              btnClass={"!h-8 !w-20 !capitalize"}
              onClick={() => handleClick()}
            />
            <form method="dialog">
              <Button
                buttonLabel={"cancel"}
                btnClass={
                  "!h-8 !w-20 !bg-white !shadow-none !text-primary-pink !border-solid !border !border-primary-pink !capitalize"
                }
                onClick={() => closeModal}
              />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DatePicker;
