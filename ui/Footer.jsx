import React, { memo } from "react";
import "@/styles/footer.css";
import dynamic from "next/dynamic";
import { NavbarSkeleton } from "@/ui/Navbar";
import HomePage from "@/public/icons/home_menu.svg";
import Books from "@/public/icons/gsbook_menu.svg";
import Sessions from "@/public/icons/ic_session.svg";
import Chat from "@/public/icons/chat_menu.svg";
import Tools from "@/public/icons/goodies_menu.svg";
const NavTab = dynamic(() => import("@/ui/NavTab"), {
  loading: () => <NavbarSkeleton />,
});
const navigations = [
  {
    id: 1,
    element: <Tools />,
    slug: "tools",
    href: '/dashboard/tools'
  },
  {
    id: 2,
    element: <Books />,
    slug: "books",
    href: "/dashboard/books",
  },
  {
    id: 3,
    element: <HomePage className="home_icon" />,
    slug: "",
    href: '/dashboard/home'
  },
  {
    id: 4,
    element: <Sessions />,
    slug: "sessions",
    href: "/dashboard/sessions",
  },
  {
    id: 5,
    element: <Chat />,
    slug: "chat",
    href: "/dasbhboard/chat",
  },
];
const Footer = () => {
  return (
    <footer className="auth_navigation_section" id="auth_navigation_section">
      <nav className="auth_navigation">
        <ul>
          {navigations.map(({ element, slug, id, route,href, ...props }) => {
            return (
              <li key={id} className="list_item" {...props}>
                <NavTab element={element} routeName={slug} href={href} />
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default memo(Footer);
