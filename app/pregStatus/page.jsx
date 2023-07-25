"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/pregStatus.css";
import BabyInWomb from "@/public/images/ic_sign_up_head.webp";
import DatePicker from "@/ui/DatePicker";
import Image from "next/image";
import { toast } from "react-toastify";
import handleInfoStatus from "@/utils/handleInfoStatus";
import getUserInfoData from "@/lib/getUserInfoData";

const PregStatus = () => {
  const [deviceId, setdeviceId] = useState("");
  const [pregStatus, setPregStatus] = useState("");
  const router = useRouter();
  // const [user, setUser] = useState({});

  const openModal = () => {
    document.getElementById("date_picker").showModal();
  };
  const getUserInfo = useCallback(async () => {
    const data = JSON.parse(localStorage.getItem("user"));

    const userInfoRes = await getUserInfoData(data?.token, data?.device_id);
      if (userInfoRes?.status == 401) {
        toast.error(jsonRes.message, {
          className: "error_toast",
        });
      } 
      handleInfoStatus(userInfoRes?.status, router)
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <section className="preg_status_section " id="preg_status_section">
      <div className="preg_status_container">
        <Image
          src={BabyInWomb}
          alt="baby in womb"
          height={100}
          width={100}
          priority
          sizes="33vw"
        />
        <div className="preg_status_row" id="preg_status_row">
          <label
            htmlFor="planner_date_picker"
            id="planner"
            className="preg_status"
            onClick={() => {
              setPregStatus("planner");
              openModal();
            }}
            role="button"
          >
            <p className="language">Planner</p>
          </label>
          <label
            role="button"
            htmlFor="pregnancy_date_picker"
            id="pregnant"
            className="preg_status"
            onClick={() => {
              setPregStatus("pregnant");
              openModal();
            }}
          >
            <p className="language">Pregnant</p>
          </label>
        </div>
        <DatePicker pregnancyStatus={pregStatus} />
      </div>
    </section>
  );
};

export default PregStatus;
