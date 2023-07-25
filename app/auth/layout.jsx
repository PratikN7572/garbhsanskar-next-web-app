
import React, { memo } from "react";
import "@/styles/authLayout.css";
import Header from "./header";
import PrevButton from "@/ui/PrevButton";

const AuthLayout = ({ children }) => {
  // const router = useRouter();
  // useEffect(() => {
  //   const data = JSON.parse(localStorage?.getItem("user"));
  //   if (!data?.token) {
  //     router.push("/auth/login");
  //   }
  //   // else {
  //   //   router.push("/dashboard/home"); // Fixed quotes inconsistency
  //   // }
  // }, [router]); // Added router as a dependency to useEffect

  return (
    <div id="auth_layout">
      <PrevButton route='/auth/login' />

      <div className="auth_layout_container">
        <Header />
        {children}
        <footer className="auth_footer_layout">
          Your data is safe with us. Millions of mothers trusting us
        </footer>
      </div>
    </div>
  );
};

export default memo(AuthLayout);
