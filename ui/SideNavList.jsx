"use client";

import Account from "@/public/icons/ic_account.svg";
import Subscripbe from "@/public/icons/ic_subscription.svg";
import AddPartner from "@/public/icons/ic_add_partner.svg";
import ChangePreg from "@/public/icons/ic_change_pregnancy.svg";
import ChangeDay from "@/public/icons/ic_change_day.svg";
import Pause from "@/public/icons/ic_pause_app.svg";
import Report from "@/public/icons/ic_report.svg";
import Language from "@/public/icons/ic_language.svg";
import About from "@/public/icons/ic_about_us.svg";
import Contact from "@/public/icons/ic_contact_us.svg";
import LogOut from "@/public/icons/ic_logout.svg";
import React, { memo, useContext } from "react";
import { UserInfoContext } from "@/app/context/userInfoContext";
import { useRouter } from "next/navigation";
import SideNavItem from "./SideNavItem";
import ChangePregnancyStatus from "./ChangePregnancyStatus";

const SideNavList = () => {
  const { state, dispatch } = useContext(UserInfoContext);
  const router = useRouter();

  const sideNav = {
    freePlanner: [
      {
        id: 1,
        element: <Account />,
        nav_title: "account",
        slug: "account",
        onClick: () => {
          router.push("/account");
        },
        attempt: false,
      },
      {
        id: 2,
        element: <Subscripbe />,
        nav_title: "subscribe course",
        slug: "subscribe",
        onClick: () => {
          router.push("/payment");
        },
        attempt: false,
      },
      {
        id: 3,
        element: <AddPartner height={14} width={14} className="custom_fig" />,
        nav_title: "add partner",
        slug: "account",
        onClick: () => {
          router.push("/payment");
        },
        attempt: false,
      },
      {
        id: 4,
        element: <ChangePreg height={14} width={14} className="custom_fig" />,
        nav_title: "change pregnancy status",
        slug: "pregStatus",
        attempt: true,
        onClick: () => {
          document.getElementById("pregStatus_modal").showModal();
        },
        children: <ChangePregnancyStatus />,
      },
      {
        id: 7,
        element: <Report />,
        nav_title: "report",
        slug: "account",
        onClick: () => {
          router.push("/payment");
        },
        attempt: false,
      },
      {
        id: 8,
        element: <Language />,
        nav_title: "language",
        slug: "account",
        onClick: () => {
          document.getElementById("language_modal").showModal();
        },
        attempt: false,
      },
      {
        id: 9,
        element: <About height={18} width={18} />,
        nav_title: "about us",
        slug: "account",
        onClick: () => router.push("https://garbhsanskarguru.com/contact-us"),
        attempt: false,
      },
      {
        id: 10,
        element: <Contact height={18} width={18} />,
        nav_title: "contact us",
        slug: "account",
        onClick: () => router.push("https://garbhsanskarguru.com/contact-us"),
        attempt: false,
      },
      {
        id: 11,
        element: <LogOut height={18} width={18} fill="#e44672" />,
        nav_title: "log out",
        slug: "account",
        onClick: () => {
          localStorage.setItem("user", JSON.stringify({}));
          router.push("/auth/login");
        },
        attempt: false,
      },
    ],
    paidPlanner: [
      {
        id: 1,
        element: <Account />,
        nav_title: "account",
      },
      {
        id: 2,
        element: <Subscripbe />,
        nav_title: "subscribe course",
      },
      {
        id: 3,
        element: <AddPartner height={14} width={14} className="custom_fig" />,
        nav_title: "add partner",
      },
      {
        id: 4,
        element: <ChangePreg height={14} width={14} className="custom_fig" />,
        nav_title: "change pregnancy status",
      },
      {
        id: 5,
        element: <ChangeDay />,
        nav_title: "change day",
      },
      {
        id: 6,
        element: <Pause />,
        nav_title: "pause app",
      },
      {
        id: 7,
        element: <Report />,
        nav_title: "report",
      },
      {
        id: 8,
        element: <Language />,
        nav_title: "language",
      },
      {
        id: 9,
        element: <About height={18} width={18} />,
        nav_title: "about us",
      },
      {
        id: 10,
        element: <Contact height={18} width={18} />,
        nav_title: "contact us",
      },
      {
        id: 11,
        element: <LogOut height={18} width={18} fill="#e44672" />,
        nav_title: "log out",
      },
    ],
  };

  return (
    <>
      {sideNav["freePlanner"].map((x, index) => {
        return (
          <SideNavItem
            key={index}
            icon={x.element}
            navTitle={x.nav_title}
            attempt={x.attempt}
            slug={x.slug}
            onClick={x.onClick}
            children={x.children && x.children}
          />
        );
      })}
    </>
  );
};

export default memo(SideNavList);
