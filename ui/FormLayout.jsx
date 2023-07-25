"use client";

import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Button from "@/ui/Button";
import clsx from "clsx";
import AutoComplete from "./AutoComplete";

const FormLayout = ({
  onSubmit,
  fields,
  initialValues,
  phoneNumber,
  ...props
}) => {
  const validateValues = (values) => {
    const errors = {};
    if (values.mobile_number) {
      if (!/^(?![nN][aA][nN]$)[6789]\d{9}$/i.test(values.mobile_number)) {
        errors.mobile_number = "Please enter a valid mobile number";
      }
    }
  };
  const [city, setCity] = useState("")
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit({...values, city: city}, actions)}
      validate={(values) => validateValues(values)}
    >
      {({ values, errors, touched, isSubmitting, dirty, isValid }) => (
        <Form id="form">
          {phoneNumber && (
            <>
              <div
                className={clsx("form_control mobile_number_field_wrapper", {
                  "border border-red-500":
                    (touched.mobile_number &&
                      !dirty.valueOf(values.mobile_number)) ||
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
            </>
          )}
          {fields.map((field, i) => {
            return (
              <React.Fragment key={i}>
                <Field autoComplete="off" {...field} />
                {errors[field.name] && (
                  <p className="error_message !m-0">{errors[field.name]}</p>
                )}
                
              </React.Fragment>
            );
          })}
          <AutoComplete setCity={(e)=>setCity(e)} />
          {/* {JSON.stringify(isValid, null)} */}
          <Button
            buttonLabel={"next"}
            type="submit"
            disabled={isSubmitting || !isValid || (touched && !dirty)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormLayout;
