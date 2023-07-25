"use client" 

import React,{useEffect, useState} from "react";
import { Field, Formik, Form } from "formik";
import Button from "@/ui/Button";
import CloseBtn from "@/public/icons/cross_circle.svg";
import clsx from "clsx";
import '@/styles/otpPopUp.css'
import ChangeNumberOptionsScreen from "./ChangeNumberOptionsScreen";
const ChangeNumber = ({ closePopUp, ...props }) => {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    const data = localStorage.getItem('user')
    setUserData(data)
  }, [])
  
  return (
    <>
    <dialog id="change_number_popUp">
      <form method="dialog" className="grid place-content-end">
        <button className="close_btn">
          <CloseBtn width={22} height={22} />
        </button>
      </form>
      <p className="pop-up_heading">wrong number?</p>
      <Formik
        onSubmit={(values) => {
            localStorage.setItem('user', {...userData, mobile_number: `${values.country_code}${values.mobile_nubmer}`})
        }}
        initialValues={{ country_code: "91", mobile_number: "" }}
        {...props}
      >
        {({ isSubmitting, touched, dirty, isValid, errors, handleChange }) => (
          <Form className="flex flex-col items-center gap-5" method="POST">
            <div
              className={clsx(
                "phoneNumber_control phone_number_field_wrapper",
                {
                  "border border-red-500":
                    touched.mobile_number && !!errors.mobile_number,
                }
              )}
            >
              <Field
                type="text"
                name="country_code"
                className="w-1/6 text-center text-primary-pink border-r border-primary-pink h-3/4"
                maxLength={4}
                autoComplete="off"
              />
              <Field
                type="text"
                name="mobile_number"
                placeholder={"new mobile number"}
                className="w-4/5 mr-0 pr-0  "
                maxLength={10}
                onChange={handleChange}
                minLength={10}
                autoComplete="off"
              />
            </div>
            <Button
              buttonLabel={"submit"}
              className="btn_primary !w-24 !h-8"
              disabled={isSubmitting || !isValid || (touched && !dirty)}
              type="submit"
            />
          </Form>
        )}
        </Formik>
      </dialog>
      <ChangeNumberOptionsScreen/>
    </>
  );
};

export default ChangeNumber;
