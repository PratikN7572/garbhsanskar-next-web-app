"use client";

import React from "react";
import LockIcon from "@/public/icons/lock.svg";
import { Field, Form, Formik } from "formik";
import PasswordInput from "@/ui/Password";
import clsx from "clsx";

const initialValues = {
    old_password: '',
    new_password: '',
    confirm_new_password: ''
}

const ChangePassword = () => {
  return (
    <>
      <LockIcon
        role="button"
        className="m-0 w-6 aspect-square"
        onClick={() => {
          document.getElementById("abc").showModal();
        }}
      />
      <dialog id="abc">
        <Formik
            initialValues={initialValues}
          onSubmit={(values, actions) => {
            // console.log(values);
          }}
          validate={(values) => {
            // console.log(values);
          }}
        >
          {({ dirty, isValid, touched }) => (
            <Form className="h-full md:w-[20rem] w-[14rem]">
              <h3 className="text-center font-bold text-primary-pink">
                change password
              </h3>
              <div className="fields_container w-full flex flex-col items-center gap-y-5 mt-3">
                <Field
                  name="old_password"
                  component={PasswordInput}
                  placeholder="old password"
                  minLength={4}
                                  maxLength={15}
                                  inputWrapperClass="!bg-gray-200/60 shadow-base font-normal"
                              />
                              <Field
                  name="new_password"
                  component={PasswordInput}
                  placeholder="new password"
                  minLength={4}
                  maxLength={15}
                    inputWrapperClass="!bg-gray-200 shadow-base"
                              />
                              <Field
                  name="confirm_new_password"
                  component={PasswordInput}
                  placeholder="confirm new password"
                  minLength={4}
                  maxLength={15}
                    inputWrapperClass="!bg-gray-200 shadow-base"
                              />
                              <button type="submit" className={clsx("btn capitalize max-w-fit rounded-full h-8 px-4 py-1 leading-3", {
                                  "bg-gray-200 pointer-events-none ": (!dirty && !touched) && !isValid
                              })} disabled={(!dirty && !touched) && !isValid}>submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </dialog>
    </>
  );
};

export default ChangePassword;
