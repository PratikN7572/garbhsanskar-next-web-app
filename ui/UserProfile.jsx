"use client";

import { UserInfoContext } from "@/app/context/userInfoContext";
import Link from "next/link";
import React, { useContext, useMemo } from "react";

const UserProfile = () => {
  const { data } = useContext(UserInfoContext).state;
  const userName = useMemo(() => data?.full_name || "", [data]);

  return (
    <Link prefetch={false} href="/" className="pl-5 text-center">
      Hey {userName}
    </Link>
  );
};

export default UserProfile;
