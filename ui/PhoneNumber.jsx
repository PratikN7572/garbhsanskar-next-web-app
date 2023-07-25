import React from "react";
import "@/styles/phoneNumber.css";
import clsx from "clsx";
const PhoneNumber = ({
  inputClass,
  field, // {name, value, onChange, onBlur}
  form: { touched, errors, dirty }, // also values that are available in formik function
  ...props
}) => {
  return (
    <div
      className={clsx("phoneNumber_control phone_number_field_wrapper", {
        "border border-red-500":
          (touched.mobile_number && !dirty.valueOf(values.mobile_number)) ||
          !!errors.mobile_number,
      })}
    >
      <input
        // type="text"
        // name="country_code"
        id={field.name}
        className={clsx(
          "w-1/6 text-center text-primary-pink border-r border-primary-pink h-3/4",
          {
            [inputClass]: !!inputClass,
          }
        )}
        {...field}
        {...props}
        // maxLength={4}
        autoComplete="off"
      />
      <input
        id={field.name}
        className={clsx("w-4/5 mr-0 pr-0", {
          [inputClass]: !!inputClass,
        })}
        {...field}
        {...props}
        // type="text"
        // name="mobile_number"
        // placeholder="mobile number"
        // maxLength={10}
        // minLength={10}
        // onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default PhoneNumber;
