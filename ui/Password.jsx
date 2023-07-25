"use client";

import clsx from "clsx";
import React, { useState } from "react";
import HidePassword from "@/public/icons/hide_password.svg";
import ViewPassword from "@/public/icons/show_password.svg";
import "@/styles/passwordInput.css";
const PasswordInput = ({
  inputWrapperClass,
  inputClass,
  field, // {name, value, onChange, onBlur}
  form: { touched, errors, dirty }, // also values that are available in formik function
  ...props
}) => {
  // hook to hide and show password field
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={clsx("password_field bg-white rounded-lg", {
        [inputWrapperClass]: !!inputWrapperClass
      })}
      title="password must contain atleast 1 capital letter, 1 small letter, 1 number and no special characters, and should be between 8 to 15 letters"
    >
      <input
        id={field.name}
        type={showPassword ? "text" : "password"}
        className={clsx({
          password_form_control: true,
          "password_form_control border border-red-500 ":
            errors[field.name] ||
            (touched[field.name] && !dirty.valueOf(field.name)),
        })}
        minLength={4}
        maxLength={15}
        required
        autoComplete="off"
        {...field}
        {...props}
      />
      {showPassword ? (
        <HidePassword
          className="pass_icon"
          onClick={() => setShowPassword(false)}
          height={20}
          width={20}
        />
      ) : (
        <ViewPassword
          className="pass_icon"
          onClick={() => setShowPassword(true)}
          height={20}
          width={20}
        />
      )}
    </div>
  );
};

export default PasswordInput;
