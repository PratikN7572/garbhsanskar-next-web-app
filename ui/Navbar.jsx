import React from "react";
import NavTab from "./NavTab";
import HomePage from "@/public/icons/home_menu.svg";
import Books from "@/public/icons/gsbook_menu.svg";
import Sessions from "@/public/icons/ic_session.svg";
import Chat from "@/public/icons/chat_menu.svg";
import Tools from "@/public/icons/goodies_menu.svg";
import "@/styles/navbar.css";

const navigations = [
  {
    id: 1,
    element: <Tools />,
    slug: "/dashboard/tools",
  },
  {
    id: 2,
    element: <Books />,
    slug: "/dashboard/books",
  },
  {
    id: 3,
    element: <HomePage className="home_icon" />,
    slug: "",
  },
  {
    id: 4,
    element: <Sessions />,
    slug: "sessions",
  },
  {
    id: 5,
    element: <Chat />,
    slug: "chat",
  },
];

export const NavbarSkeleton = () => {
  return (
    <nav className="auth_navigation">
      <ul>
        {[1, 2, 3, 4, 5].map((x, i) => {
          return (
            <li
              key={i}
              className="w-12 aspect-square bg-slate-200 animate-pulse"
            ></li>
          );
        })}
      </ul>
    </nav>
  );
};
const Navbar = () => {
  return (
    <nav className="auth_navigation">
      <ul>
        {navigations.map(({ element, slug, id, route, ...props }) => {
          return (
            <li key={id} className="list_item" {...props}>
              <NavTab element={element} routeName={slug} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
