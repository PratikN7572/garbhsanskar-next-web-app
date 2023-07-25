import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { UserInfoContextProvider } from "../context/userInfoContext";

const Footer = dynamic(() => import("@/ui/Footer"));

const SideNav = dynamic(() => import("@/ui/SideNav"), {
  ssr: false, // do not render on server-side
});

export default function HomeLayout({ children }) {
  return (
    <>
    <UserInfoContextProvider>
    <section className="dashboard_layout border shadow-none rounded-none w-screen bg-white relative overflow-y-scroll max-w-md m-auto overflow-hidden md:shadow-base md:rounded-md">
          <div className="dashboard_wrapper h-screen overflow-hidden">{children}</div>
      </section>
      <SideNav />
      </UserInfoContextProvider>
      <Footer />
      </>
  );
}
