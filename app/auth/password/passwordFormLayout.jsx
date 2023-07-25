"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form, Formik } from "formik";
import Button from "@/ui/Button";
import PasswordInput from "@/ui/Password";
import { postApiCall } from "@/lib/postApiCall";
const OtpOptions = dynamic(() => import("@/ui/OtpOptions"));
import { useRouter } from "next/navigation";
import { getBrowserFingerprint } from "@/utils/getBrowserFingerprint";
import handleInfoStatus from "@/utils/handleInfoStatus";
import dynamic from "next/dynamic";

const PasswordFormLayout = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [deviceId, setdeviceId] = useState("");
  const updateStorage = (loginRes, uuid) => {
    const {
      desire_baby_activitys,
      desire_baby_activitys_guns,
      is_verify,
      lmp_date,
      city_id,
      user_timezones,
      ...restLoginData
    } = loginRes?.data;
    localStorage.setItem('user', JSON.stringify({ ...restLoginData, device_id:uuid }))
    setUserData({...restLoginData})
  }
  async function displayFingerprint() {
    const fingerprint = await getBrowserFingerprint();
    setdeviceId(fingerprint);
  }
  
  useEffect(() => {
    let data = JSON.parse(localStorage?.getItem("user"));
    setUserData(data);
    displayFingerprint();
  }, []);
  const validateValues = (values) => {
      if (values.password) {
        if (!/^[A-Za-z0-9]{4,15}$/i.test(values.password)) {
          return "password should be between 4 to 15 letters";
        }
      } else {
        return "";
    }
  };

  const login_user = async (submitValues) => {
    const loginRes = await postApiCall(submitValues, "login", {
      headers: {
        "Content-Type": "Application/json",
      },
    });
    if (loginRes?.status === 200) {
      updateStorage(loginRes, deviceId)
      if (loginRes?.user_lang == "") {
      router.push("/dashboard/localeSelection");
      }
      if (loginRes?.user_type == "" || loginRes?.lmp_date == "" ) {
        router.push("/dashboard/pregStatus");
        }
      router.push('/dashboard/home')
    } 
    if (loginRes?.status === 101) { 
      updateStorage(loginRes, deviceId)
    }
    if (loginRes?.status === 401) {
      toast.error(loginRes?.message, {
        className: "error_toast",
      });
    }
    handleInfoStatus(loginRes?.status, router)


  };

  const sendOtp = async (values, actions) => {
    const submitValues = {
      ...values,
      mobile_number: `${userData.mobile_number}`,
      user_key: userData.user_key,
    };
    // console.log('submitValues', submitValues, userData);
    localStorage.setItem("user", JSON.stringify({ ...userData, send_to: values.send_to }));
    const otpCall = await postApiCall(submitValues, "send_opt", {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    });
    actions.setSubmitting(false);
    if (otpCall.status === 200) {
      router.push("/auth/otpVerification");
    } else {
      toast.error(otpCall.message, {
        className: "error_toast",
      });
    }
  };
  const forgotOtpSubmit = async (values, actions) => {
    const submitValues = {
      ...values,
      user_key: userData.user_key,
    };
    localStorage.setItem("user", JSON.stringify({ ...userData, send_to: values.send_to }));
    const forgotOtpCall = await postApiCall(
      submitValues,
      "send_forgot_otp_api",
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    actions.setSubmitting(false);
    if (forgotOtpCall.status === 200) {
      router.push("/auth/forgotOtpVerification");
    } else {
      toast.error(forgotOtpCall.message, {
        className: "error_toast",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ password: "" }}
        validate={(values) => validateValues(values)}
        onSubmit={async (values, actions) => {
          if (values.password) {
            const submitValues = {
              user_name: `${
                userData.is_login === "mobile"
                  ? userData.mobile_number
                  : userData.email
              }`,
              password: values.password,
              device_type: "ios",
              device_id: deviceId,
              fcm_token: "123",
              app_version: "1.0",
              country_code: 91,
              user_timezones: Intl.DateTimeFormat().resolvedOptions().timeZone,
              ref_code: "",
            };
            // login api call
            login_user(submitValues);
            localStorage.setItem("user", JSON.stringify(userData));

            actions.setSubmitting(false);
          }
        }}
      >
        {({isSubmitting }) => (
          <Form id="form">
            <div className="flex w-full flex-col items-end">
              <Field
                name="password"
                placeholder="enter password"
                minLength={4}
                maxLength={15}
                component={PasswordInput}
                validate={(value) => {
                  if (value) {
                    if (!/^[A-Za-z0-9]{4,15}$/i.test(value)) {
                      return "password should be between 4 to 15 letters";
                    }
                  } else {
                    return "";
                  }
                }}
              />
              <p
                className="text-primary-pink text-sm"
                role="button"
                onClick={() => {
                  document.getElementById("forgotOtpPopUp").showModal();
                }}
              >
                forgot passowrd?
              </p>
            </div>
            <Button
              type="submit"
              buttonLabel={"next"}
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
      <OtpOptions user={userData} id={"otpPopUp"} onSubmit={sendOtp} />
      <OtpOptions
        user={userData}
        id={"forgotOtpPopUp"}
        onSubmit={forgotOtpSubmit}
      />
    </>
  );
};

export default PasswordFormLayout;
