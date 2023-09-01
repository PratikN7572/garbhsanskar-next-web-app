"use client";
import ScreenHeader from "@/ui/ScreenHeader";
import dynamic from "next/dynamic";
import AddOns from "@/ui/AddOns";
import ParentingGuruInfo from "@/ui/ParentingGuruInfo";
import { ActivitiesTabSkeleton } from "@/ui/ActivitiesTab";
import HomeModal from "@/ui/HomeModal";
import ActivityCard from "@/ui/ActivityCard";
import ActivityDescriptionCard from "@/ui/ActivityDescriptionCard";
// const HomeModal = dynamic(()=>import('@/ui/HomeModal'))
const ActivitiesTab = dynamic(() => import("@/ui/ActivitiesTab"), {
  ssr: false,
  loading: () => <ActivitiesTabSkeleton />,
});
const Dashboard = () => {

 
  return (
    <>
      <ScreenHeader />
      <ActivitiesTab />
      <AddOns />
      <HomeModal/>
      <ActivityCard />
     
    </>
  );
};
export default Dashboard;
