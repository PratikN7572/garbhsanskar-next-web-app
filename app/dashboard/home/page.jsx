"use client";
import ScreenHeader from "@/ui/ScreenHeader";
import dynamic from "next/dynamic";
import AddOns from "@/ui/AddOns";
import ParentingGuruInfo from "@/ui/ParentingGuruInfo";
import { ActivitiesTabSkeleton } from "@/ui/ActivitiesTab";
import HomeModal from "@/ui/HomeModal";
import ActivityCard from "@/ui/ActivityCard";
import ActivityDescriptionCard from "@/ui/ActivityDescriptionCard";
import CardDetail from "@/ui/Activity";
import Activity from "@/ui/Activity";
// const HomeModal = dynamic(()=>import('@/ui/HomeModal'))
const ActivitiesTab = dynamic(() => import("@/ui/ActivitiesTab"), {
  ssr: false,
  loading: () => <ActivitiesTabSkeleton />,
});
const Dashboard = () => {

 
  return (
    <>
      {/* <ScreenHeader />
      <ActivitiesTab />
      <AddOns />
      <HomeModal/>
      <ActivityCard /> */}
     <Activity activityDescription="Baby's message to mumma" activityType='Dear Mom' url='https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=100' />
    </>
  );
};
export default Dashboard;
