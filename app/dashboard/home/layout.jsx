'use client';

import React, { useContext, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import getUserInfoData from "@/lib/getUserInfoData";
import handleInfoStatus from "@/utils/handleInfoStatus";
import { UserInfoContext } from "@/app/context/userInfoContext";
import ParentingGuruInfo from "@/ui/ParentingGuruInfo";
const MainHeader = dynamic(() => import("@/ui/MainHeader"));

const DashboardLayout = ({ children }) => {
  const { dispatch } = useContext(UserInfoContext);
  const router = useRouter();
  // const desire_baby_activitys = ""
  const updateUserInfo = useCallback(
    (param) => {
      dispatch({
        type: "UPDATE_USER_INFO",
        payload: { ...param, current_module: param?.current_day },
      });
    },
    [dispatch]
  );

  const getUserInfo = useCallback(async () => {
    const data = JSON.parse(localStorage?.getItem("user"));
    if (!data?.token) {
      router.push("/auth/login");
    }
    const info = await getUserInfoData(data?.token, data?.device_id);
    handleInfoStatus(info?.status, router, info?.message);
    updateUserInfo(info?.data);
    if (info?.data?.user_type === "") {
      router.push("/pregStatus");
    } else if (info?.data?.user_type === "planner") {
      router.push("/dashboard/home/planner");
    }

    if (info?.data?.user_lang === "") {
      router.push("/localeSelection");
    }
    if (info?.data?.desire_baby_activitys === "") {
      // setShowModal(true)
      document.getElementById("baby_qualities")?.showModal();
    }
    localStorage?.setItem(
      "user",
      JSON.stringify({ ...data, current_day: info?.data?.current_day })
    );
  }, [router, updateUserInfo]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <section
      className="home_wrapper relative overflow-y-scroll"
      style={{ height: "calc(100% - 64px)" }}
    >
      <MainHeader />
      <div className="py-4 overflow-hidden">{children}</div>
      <ParentingGuruInfo />
      <dialog
        id="fetus_status_info"
        className="overflow-hidden rounded-lg"
      >
        <div className=" max-w-sm p-5 flex flex-col gap-5 items-center justify-center">
            <h1 className="font-semibold text-primary-pink text-xl text-center">
              Dear mom
            </h1>
            <p className="text-center text-base">
              Your baby growth may differ from the estimates we provide, and
              that is normal. Trust the journey!
            </p>
            <form method="dialog">
              <button className="bg-primary-pink text-white py-2 px-7 rounded-md m-auto">
                Okay
              </button>
          </form>
          </div>
            </dialog>
    </section>
  );
};

export default DashboardLayout;
