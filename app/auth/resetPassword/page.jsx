"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form, Formik } from "formik";

import "@/styles/formLayout.css";
import "@/styles/resetPassword.css";
import { resetPasswordFields } from "@/db";
import Button from "@/ui/Button";
import { postApiCall } from "@/lib/postApiCall";

const ResetPassword = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  const router = useRouter();
  const validateValues = (values) => {
    let errors = {};
    if (values.password) {
      if (!/^[A-Za-z0-9]{4,15}$/i.test(values.password)) {
        errors.password = "invalid password format";
      }
    }

    if (values.confirm_password) {
      if (!/^[A-Za-z0-9]{4,15}$/i.test(values.confirm_password)) {
        errors.confirm_password = "invalid password format";
      } else if (values.confirm_password !== values.password) {
        errors.confirm_password = "passwords do not match";
      }
    }

    return errors;
  };
  const handleSubmit = async (values, actions) => {
    const submitValues = {
      user_key: user.user_key,
      ...values,
    };
    const resetPasswordRes = await postApiCall(
      submitValues,
      "save_password_api"
    );
    
    if (resetPasswordRes.status === 401) {
      toast.error(registerResponse.message, {
        className: "error_toast",
      });
      actions.setSubmitting(false);
    } 
    router.push("/auth/password");
    actions.resetForm();
  };
  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={resetPasswordFields.initialValues}
        validate={(values) => validateValues(values)}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ isValid, errors, isSubmitting }) => (
          <Form id="form">
            {resetPasswordFields.fields.map((x, i) => {
              return (
                <>
                  <Field key={i} {...x} />
                  {errors[x.name] && (
                    <p className="error_message">{errors[x.name]}</p>
                  )}
                </>
              );
            })}

            <Button
              buttonLabel={"next"}
              type="submit"
              disabled={isSubmitting || !isValid}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
