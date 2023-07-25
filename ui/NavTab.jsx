"use client";

import React from "react";
import "@/styles/navtab.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavTab = ({ routeName, element, slug,href, ...props }) => {
  const activeRoute = usePathname().split("/");
  const key = activeRoute.slice(activeRoute.length - 1).toString();
  return (
    <Link
      className={`${routeName === key ? "clicked" : ""}`}
      href={href}
      aria-label={`${slug}`}
    >
      <div className="navigation_icon">{element}</div>

      <p className="list_item_title">{routeName}</p>
    </Link>
  );
};

export default NavTab;
