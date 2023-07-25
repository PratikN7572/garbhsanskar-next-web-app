"use client";

import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getBrowserFingerprint } from "@/utils/getBrowserFingerprint";
import { signUpFields } from "@/db";
import { postApiCall } from "@/lib/postApiCall";
import FormLayout from "@/ui/FormLayout";
// import AutoComplete from "@/ui/AutoComplete";
import OtpOptions from "@/ui/OtpOptions";
import { useRouter, useSearchParams } from "next/navigation";
import handleInfoStatus from "@/utils/handleInfoStatus";

const SignUp = () => {
  const params = useSearchParams();
  const [userData, setUserData] = useState({});
  const [deviceId, setdeviceId] = useState("");
  const router = useRouter();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    setUserData(data);
    displayFingerprint();
  }, []);
  const updateStorage = (registerRes) => {
    const {
      desire_baby_activitys,
      desire_baby_activitys_guns,
      is_verify,
      lmp_date,
      city_id,
      user_timezones,
      ...restRegisterRes
    } = registerRes;
    localStorage.setItem('user', JSON.stringify({ ...restRegisterRes}))
    setUserData({...restRegisterRes})
  }
  
  // get browser fingerprint / device_id
  // to send the unique id for single session management
  
  async function displayFingerprint() {
    const fingerprint = await getBrowserFingerprint();
    setdeviceId(fingerprint);
  }

  // submit function to submit signUp form:
  const initialValues = {
    ...signUpFields.initialValues,
    mobile_number: params?.get("mobile_number") || "",
    email: params?.get("email") || "",
  };
  const handleSubmit = async (values, actions) => {
    
    // these submit values will be using in the register api.
    const submitValues = {
      ...values,
      mobile_number: `${values.country_code}${values.mobile_number}`,
      device_type: "web",
      fcm_token: "xyz",
      device_id: `${deviceId}`,
      app_version: "1.0",
      country_code: `${values.country_code}`,
      user_timezones: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ref_code: "",
    };
    // Storing the response of register api call:
    const registerResponse = await postApiCall(submitValues, "register");
    // redirecting the user based on the register api custom status code:
    if (registerResponse?.status === 200) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...registerResponse.data,
          device_id: `${deviceId}`,
        })
      );
      router.push("/localeSelection");
    }
    
    if (registerResponse?.status === 101) {
      // updating { device_id, token, user_key } that we get from the register api response, in localStorage of key 'user':
      handleInfoStatus(registerResponse?.status, router)
      updateStorage({...registerResponse.data, device_id: deviceId})
      // after updating the localStorage, we open the otp-pop-up
      actions.resetForm();
    } else {
      // error toast notification configuratio
      toast.error(registerResponse?.message, {
        className: "error_toast",
      });
    }
  };

  const sendOtp = async (values, actions) => {
    const submitValues = {
      ...values,
      mobile_number: `${userData.mobile_number}`,
      user_key: userData.user_key,
    };
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

  return (
    <>
      <ToastContainer />
      <FormLayout
        fields={signUpFields.fields}
        initialValues={{ ...initialValues }}
        phoneNumber={true}
        onSubmit={handleSubmit}
      />
      <OtpOptions
        user={userData}
        id="otpPopUp"
        closePopUp={() => CloseModal("otpPopUp")}
        onSubmit={sendOtp}
      />
    </>
  );
};

export default SignUp;
