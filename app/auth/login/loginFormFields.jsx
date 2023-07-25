import React from "react";
import { Field } from "formik";
import clsx from "clsx";

export const loginFormInitialValues = {
  email: "",
  country_code: `91`,
  mobile_number: "",
};
export const validateValues = (values) => {
  const errors = {};
  // // console.log(errors);

  if (values.email) {
    if (
      !/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/i.test(
        values.email
      )
    ) {
      errors.email = "Please enter a valid email";
    }
  }

  if (values.mobile_number) {
    if (!/^(?![nN][aA][nN]$)[6789]\d{9}$/i.test(values.mobile_number)) {
      errors.mobile_number = "Please enter a valid mobile number";
    }
  }

  if (values.country_code) {
    if (!/^[0-9+]+$/i.test(values.country_code)) {
      errors.country_code = "invalid country code";
      // console.error("invalid country_code");
    }
  }
  return errors;
};
const LoginFormFields = ({ values, errors, touched, dirty }) => {
  return (
    <>
      <div
        className={clsx("form_control mobile_number_field_wrapper", {
          "border border-red-500":
            (touched.mobile_number && !dirty.valueOf(values.mobile_number)) ||
            !!errors.mobile_number,
        })}
      >
        <div className="w-1/6 text-sm sm:text-base pl-3 flex items-center text-center text-primary-pink border-r h-3/4">
          &#43;&nbsp;
          <Field
            type="text"
            name="country_code"
            value={values.country_code}
            className="w-full"
            maxLength={3}
          />
        </div>
        <Field
          type="text"
          name="mobile_number"
          value={values.mobile_number}
          placeholder={"mobile number"}
          className="w-4/5 mr-0 pr-0"
          maxLength={10}
          minLength={10}
        />
      </div>
      {errors.mobile_number && (
        <p className="error_message">{errors.mobile_number} </p>
      )}
      {/* <h1 className="font-bold hidden">OR</h1> */}
      <div
        className={clsx("form_control flex justify-end", {
          "border border-red-500":
            (touched.email && !dirty.valueOf(values.email)) || !!errors.email,
        })}
      >
        <Field
          type="email"
          name="email"
          className="w-[90%] mx-auto pr-0"
          value={values.email}
          placeholder={"email"}
          maxLength={100}
        />
      </div>
      {errors.mobile_number && (
        <p className="error_message">
          {errors.email && touched.email && errors.email}
        </p>
      )}
    </>
  );
};

export default LoginFormFields;
