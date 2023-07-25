"use client"
import React from "react";
import "@/styles/sideNav.css";
import dynamic from "next/dynamic";
import SideNavList from "./SideNavList";

const UserProfile = dynamic(() => import("@/ui/UserProfile"), {
  ssr: false,
});
const SideNav = () => {
  return (
    <aside id="sidenav-open" className="z-50">
      <nav>
          <UserProfile />
        <SideNavList />
        <footer
          className="text-[#333333] py-4 mx-auto leading-5 underline text-center w-5/6 border-t-2 border-[#D3D3D3]
          "
        >
          terms &amp; privacy policy
        </footer>
      </nav>
      <a
        href="#"
        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
      ></a>
    </aside>
  );
};

export default SideNav;
