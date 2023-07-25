"use client";
import React, { memo, useEffect, useState } from "react";
import "@/styles/otpPopUp.css";
import CloseBtn from "@/public/icons/cross_circle.svg";
import { Field, Form, Formik } from "formik";

const OtpOptions = ({ id, closePopUp, user, onSubmit }) => {

  const pattern =
  /^[6-9]\d{9}$|^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
const emailRegex =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
const numRegex = /^[6-9]\d{9}$/;

    const numberoremail = (input) => {
      if (pattern.test(input)) {
        if (emailRegex.test(input)) {
          var maskedEmail = input.replace(/.(?=.{0,2}@)/g, "*");
          return maskedEmail;
        }
        if (!numRegex.test(input)) {
          return input;
        } else {
          var maskedPhoneNumber = input.replace(/^\d{6}/, "******");
          // // console.log("maskedPhoneNumber", maskedPhoneNumber);
          return maskedPhoneNumber;
        }
      }
    };
  

  return (
    // id given in the dialog-box html tag should be same as given to the button for opening the dialog-box
    <div id="otp_popUp">
      <dialog id={id}>
        <form method="dialog" className="grid place-content-end">
          <button className="close_btn" onClick={() => closePopUp}>
            <CloseBtn width={22} height={22} />
          </button>
        </form>
        <p className="pop-up_heading">select any one</p>
        <Formik
          initialValues={{
            send_to: "",
          }}
          onSubmit={(values, actions) => onSubmit(values, actions)}
        >
          {({ values, errors, touched, isSubmitting, dirty, isValid }) => (
            <Form id="form" className="!items-start">
              <div className="otp-util w-full">
                <label htmlFor="sms" className="otp_label">
                  receive OPT on -<span className="uppercase"> sms &nbsp;</span>
                  <strong>{numberoremail(user.mobile_number)}</strong>
                </label>
                <Field type="radio" id="sms" name="send_to" value="sms" />
              </div>
              <div className="otp-util w-full">
                <label htmlFor="whatsapp" className="otp_label">
                  receive OPT on -
                  <span className="uppercase"> whatsapp &nbsp;</span>
                  <strong>{numberoremail(user.mobile_number)}</strong>
                </label>
                <Field
                  type="radio"
                  id="whatsapp"
                  name="send_to"
                  value="whatsapp"
                />
              </div>
              {/* {user.email && (
                <div className="otp-util w-full">
                  <label htmlFor="email" className="otp_label">
                    receive OPT on -
                    <span className="uppercase"> email &nbsp;</span>
                    <strong>{numberoremail(user.email)}</strong>
                  </label>
                  <Field type="radio" id="email" name="send_to" value="email" />
                </div>
              )} */}

              <div className="grid place-content-center w-full">
                <button
                  type="submit"
                  className="otp_btn !h-8 !w-36 text-sm text-white !rounded-full !mx-auto"
                  disabled={isSubmitting}
                >
                  click to request Otp
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </dialog>
    </div>
  );
};

export default memo(OtpOptions);
