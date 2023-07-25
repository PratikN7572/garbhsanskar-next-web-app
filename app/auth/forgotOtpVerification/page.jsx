"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/otpVerification.css";
import { Field, Form, Formik } from "formik";
import Button from "@/ui/Button";
import clsx from "clsx";
import { otpFields } from "@/db.js";
import { useRouter } from "next/navigation";
import { postApiCall } from "@/lib/postApiCall";
import ResendButton from "@/ui/ResendButton";
import PrevButton from "@/ui/PrevButton";

const ForgotOtpVerification = ({ ...props }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage?.getItem("user"));
    setUser(data);
  }, []);

  const router = useRouter();
  const maskedPhoneNumber = String(user.mobile_number).replace(/(\d{4})(\d+)/, "*****$2")?.replace(/(\d{3})(\d{4})/, "$2") || '';
  const onSubmit = async (values) => {
    const otp = Object.values(values).join("");
    const submitValues = {
      otp_number: otp,
      user_key: `${user.user_key}`,
    };
    const verifyOtpRes = await postApiCall(submitValues, "forgot_verify_otp_api", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (verifyOtpRes.status === 200) {
      router.push("/auth/resetPassword");
    } else {
      toast.error(verifyOtpRes.message, {
        className: "error_toast",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={clsx("otp_form_wrapper")}>
        <PrevButton route='/auth/password' />
        <p className="text-[#666666] m-0 p-0 text-sm text-center">
          we&apos;ve sent otp to
          <span className="mobile_number text-primary-pink">{` ${user.country_code || "+91"}-${maskedPhoneNumber} `}</span>
          wait before requesting on SMS/WhatsApp with your code
        </p>
        <Formik
          onSubmit={(values) => onSubmit(values)}
          initialValues={otpFields.initialValues}
          {...props}
        >
          {({ isSubmitting, handleChange, isValid }) => (
            <Form id="otp_form">
              <div className="flex justify-between gap-8" id="fields">
                {otpFields.fields.map((field, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Field
                        key={field.name}
                        autoComplete="off"
                        {...field}
                        {...props}
                        className="otp_field_input"
                        onChange={handleChange}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
              <ResendButton  />
              <Button
                buttonLabel={"verify"}
                disabled={isSubmitting || !isValid}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ForgotOtpVerification;
