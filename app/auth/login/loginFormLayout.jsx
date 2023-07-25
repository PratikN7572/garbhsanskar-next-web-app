"use client";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Button from "@/ui/Button";
import LoginFormFields, {
  loginFormInitialValues,
  validateValues,
} from "./loginFormFields";
import { useRouter } from "next/navigation";
import { postApiCall } from "@/lib/postApiCall";

export default function LoginFormLayout() {
 
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('user',JSON.stringify({}))
  }, []);

  const check_username_api = async (submitValues, values) => {
    const user = await postApiCall(submitValues, "check_username_api");
    // setUserData(user.data);
    if (user?.is_newuser === 1) {
      router.push(
        `/auth/signUp?mobile_number=${values?.mobile_number}&email=${values?.email}`
      );
      localStorage.setItem('user',JSON.stringify({}))
    } else {
      localStorage.setItem("user", JSON.stringify(user?.data));
      router.push("/auth/password");
    }
    
  }
  const onSubmit = async(values, actions) => {
    const filteredValues = filterEmptyStringProps(values);
    const { country_code, ...rest } = filteredValues;
    if (values.email || values.mobile_number) {
      const number = `${values.country_code}${values.mobile_number}`;
      const submitValues = {
        ...rest,
        mobile_number: number,
      };
      
      // check_username_api call
      check_username_api(submitValues, values);
      actions.setSubmitting(false);
    }
  };
  function filterEmptyStringProps(obj) {
    const filteredEntries = Object.entries(obj).filter(
      ([key, value]) => value !== ""
    );
    return Object.fromEntries(filteredEntries);
  }
  return (
    <>
      <Formik
        initialValues={loginFormInitialValues}
        validate={(values) => validateValues(values)}
        onSubmit={async (values, actions) => onSubmit(values, actions)}
      >
        {({ values, errors, touched, isSubmitting, dirty }) => (
          <Form id="form">
            <LoginFormFields
              dirty={dirty}
              touched={touched}
              errors={errors}
              values={values}
            />
            {/* {JSON.stringify(isSubmitting, null)} */}
            <Button
              buttonLabel={"next"}
              type="submit"
              // disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

// export default LoginFormLayout;
