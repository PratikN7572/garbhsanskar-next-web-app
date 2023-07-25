"use client";

import React, { useContext, useEffect } from "react";
import MasterScreenHeader from "@/ui/MasterScreenHeader";
import StoryBody from "@/ui/StoryBody";
import { useParams, useRouter } from 'next/navigation'
import getStoryDetail from "@/lib/getStoryDetail";
import handleInfoStatus from "@/utils/handleInfoStatus";
import { ModuleContext } from "@/app/context/moduleContext";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const { state, dispatch } = useContext(ModuleContext)
  // console.log(state)
  const storyDetail = async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const body = {
      current_day: data?.current_day,
      user_key: data?.user_key,
      module_key: params?.slug,
    };

    const response = await getStoryDetail(data?.token, body);
    console.log("response", response)
    return false;
    if (response?.status === 200) {
    
      dispatch({
        type: 'SET_MODULE',
        payload: response
      })
    }
    
  };

  useEffect(() => {
    storyDetail();
  }, []);
  return (
    <>
      <MasterScreenHeader />
      {/* <StoryBody /> */}
    </>

  );
};

export default Page;
