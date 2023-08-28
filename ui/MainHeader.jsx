import React, { memo } from "react";
import Image from "next/image";
import "@/styles/header.css";
import StoryAnimation from "./StoryAnimation";
import Subscribe from "./Subscribe";
import Notification from "./Notification";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header_wrapper" id="auth_header">
      <div className="user_subscription_util">
        <a
          href="#sidenav-open"
          title="Open Menu"
          aria-label="Open Menu"
          className="user_profile_image"
          id="sidenav-button"
          role="link"
        >
          <div className="circular_shadow_wrapper">
            <div className="avatar overflow-hidden relative">
              <Image
                src="/images/profile_img.webp"
                alt="profile of the registered user"
                fill
                loading="eager"
                priority
              />
            </div>
          </div>
          <p className="title">profile</p>
        </a>
        <Subscribe />
      </div>
      <div className="updates_utils">
        <Link
          href="/tips"
          className="flex flex-col gap-1"
          role="link"
          aria-label="today's tips"
        >
          <StoryAnimation />
          <p className="title">today&apos;s tip</p>
        </Link>
        <Notification />
      </div>
    </header>
  );
};

export default memo(Header);
