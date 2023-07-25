import clsx from "clsx";
import React from "react";
import "@/styles/input.css";
const Input = ({
  inputWrapperClass,
  inputClass,
  field, // {name, value, onChange, onBlur}
  form: { touched, errors, dirty }, // also values that are available in formik function
  ...props
}) => {
  return (
    <>
      <div
        className={clsx("input_control_wrapper", {
          "border border-red-500":
            (touched[field.name] && !dirty.valueOf(field.name)) ||
            !!errors[field.name],
          [inputWrapperClass]: !!inputWrapperClass,
        })}
      >
        <input
          id={field.name}
          className={clsx("input_control", {
            [inputClass]: !!inputClass,
          })}
          required
          {...field}
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
