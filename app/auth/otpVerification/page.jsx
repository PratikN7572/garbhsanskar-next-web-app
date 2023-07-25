"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/otpVerification.css";
import { Field, Form, Formik } from "formik";
import Button from "@/ui/Button";
import clsx from "clsx";
import { otpFields } from "@/db.js";
import BackButton from "@/public/icons/back_button.svg";
import { useRouter } from "next/navigation";
import ChangeNumber from "@/ui/ChangeNumberPopUp";
import { postApiCall } from "@/lib/postApiCall";
import handleInfoStatus from "@/utils/handleInfoStatus";

const OtpVerification = ({ ...props }) => {
  const [countdown, setCountdown] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    let timer = null;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const router = useRouter();
  const handleClick = async () => {
    setCountdown(60);
    const otpCall = await postApiCall(
      {
        user_key: user.user_key,
        mobile_number: user.mobile_number,
        send_to: user.send_to,
      },
      "send_opt",
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (otpCall.status === 401) {
      toast.error(otpCall.message, {
        className: "error_toast",
      });
    }
    console.log(otpCall);
    return false;
  };
  const openPopUp = () => {
    document.getElementById("change_number_popUp").showModal();
  };
  const closePopUp = () => {
    document.getElementById("change_number_popUp").hideModal();
  };
  const maskedPhoneNumber = String(user.mobile_number).replace(/(\d{1})(\d{6})/, "******")?.replace(/(\d{3})(\d{1})/, "$1$2") || '';

  // const validateValues = (values) => {
  //   const errors = {};
  //   // // console.log(errors);
  //   // if (values.mobile_number) {
  //   //   if (!/^[6789]\d{9}$/i.test(values.mobile_number)) {
  //   //     errors.mobile_number = "Invalid mobile number";
  //   //   } else {
  //   //     errors.mobile_number = "";
  //   //   }
  //   // }
  //   return errors;
  // };
  return (
    <>
      <ToastContainer />
      <div className={clsx("otp_form_wrapper")}>
        <div className="prev_btn">
          <BackButton onClick={() => router.back()} height={20} width={20} />
        </div>
        <div className="text-[#666666] m-0 p-0 text-sm text-center">
          we&apos;ve sent otp to
          <span className="mobile_number text-primary-pink">{` ${user.country_code || "+91"}-${maskedPhoneNumber} `}</span>
          wait before requesting on SMS/WhatsApp with your code
        </div>
        <p
          id="change_number"
          role={"button"}
          onClick={openPopUp}
          className="text-xs text-center underline font-semibold"
        >
          wrong number?
        </p>
        <Formik
          onSubmit={async (values) => {
            // console.log("values", values);

            const otp = Object.values(values).join("");
            // console.log("otp", otp);
            const submitValues = {
              otp_number: otp,
              mobile_number: user.mobile_number,
            };
            // console.log("values", submitValues);
            const verifyOtpRes = await postApiCall(submitValues, "verify_otp", {
              method: "POST",
              headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${user.token}`,
              },
            });
            
            if (verifyOtpRes?.status === 200) {
              console.log('verifyOtpRes?.data?.token', verifyOtpRes?.data?.token)
              localStorage.setItem("user",JSON.stringify({...user, token: `${verifyOtpRes?.data?.token}`}))
              router.push("/localeSelection");
            }
            handleInfoStatus(verifyOtpRes?.status, router)
          }}
          initialValues={otpFields.initialValues}
          {...props}
        >
          {({ isSubmitting, handleChange, isValid, dirty }) => (
            <Form id="otp_form">
              <div className="flex justify-between gap-8" id="fields">
                {otpFields.fields.map((field) => {
                  return (
                      <Field
                        key={field.name}
                        autoComplete="off"
                        {...field}
                        {...props}
                        className="otp_field_input"
                        onChange={handleChange}
                      />
                  );
                })}
              </div>
              {countdown ? (
                <p className="text-[#666666] m-0 p-0 text-sm place-self-end">
                  reset otp in
                  <span className="font-bold text-black">00 : {countdown}</span>
                  sec
                </p>
              ) : (
                <button
                  className="otp_reset_btn"
                  type="submit"
                  onClick={handleClick}
                >
                  resend
                </button>
              )}
              <Button
                buttonLabel={"verify"}
                disabled={isSubmitting || !isValid}
              />
            </Form>
          )}
        </Formik>
        <ChangeNumber closePopUp={() => closePopUp} />
      </div>
    </>
  );
};

export default OtpVerification;
