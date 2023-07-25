"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BrandLogo from "@/public/images/logo.webp";
import BabyInWomb from "@/public/images/ic_sign_up_head.webp";
import CreatePassword from "@/public/images/ic_create_pass_head.webp";
import OtpLogo from "@/public/images/ic_otp_head.webp";

const Header = () => {
  const pathname = usePathname();
  const arr = pathname.split("/");
  const key = arr[arr.length - 1];
  let logo;
  switch (key) {
    case "signup":
      logo = BabyInWomb;
      break;

    case "resetPassword":
      logo = CreatePassword;
      break;

    case "otpVerification":
      logo = OtpLogo;
      break;

    default:
      logo = BrandLogo;
      break;
  }

  return (
    <header className="auth_layout__header">
      <Image
        src={logo}
        alt="header logo"
        height={100}
        width={100}
        priority
        sizes="100px"
        className="auth_layout_header_image"
        quality={75}
      />
      {(key !== "signup" || key !== "resetPassword") && (
        <h1>
          <strong>India&apos;s most trusted garbhsanskar app</strong>
        </h1>
      )}
    </header>
  );
};

export default Header;
