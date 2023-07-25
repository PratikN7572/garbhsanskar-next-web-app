import PackageDay from "@/ui/PackageDay";
import QuizBanner from "@/ui/QuizBanner";
import React from "react";
import dynamic from "next/dynamic";
import { ActivitiesTabSkeleton } from "@/ui/ActivitiesTab";

const ActivitiesTab = dynamic(() => import("@/ui/ActivitiesTab"), {
    ssr: false,
    loading: () => <ActivitiesTabSkeleton />,
});
  
const Page = () => {
  return (
    <>
      <QuizBanner />
        <PackageDay />
       <ActivitiesTab/>   
    </>
  );
};

export default Page;
