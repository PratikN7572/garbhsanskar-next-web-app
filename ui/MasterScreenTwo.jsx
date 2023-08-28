import React from "react";
import CustomHeader from "./CustomHeader";
import PrevButton from "./PrevButton";
import YogaDialog from "./YogaDialog";
import Image from "next/image";
import ClockIcon from "@/public/icons/ic_clock.svg";
import LikeButton from "./LikeButton";


const MasterScreenTwo = ({children}) => {

  return (
    <section id="wrapper" style={{ height: "calc(100% - 64px)" }}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <PrevButton route="/dashboard/home" />
        <h3 className="font-bold text-base capitalize tracking-wider flex-1 text-center">
          yoga-pranayama
        </h3>
        <YogaDialog />
      </CustomHeader>
      <div className="wrapper_container bg-gray-100 flex flex-col w-full gap-5 py-2 overflow-y-scroll h-full">
        <div className="image_container p-5 bg-yellow-100 w-5/6 mx-auto rounded-lg">
          <div className="image relative w-5/6 m-auto aspect-video overflow-hidden rounded-tr-3xl rounded-bl-3xl ">
            <Image
              src="https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt=""
              fill
            />
          </div>
        </div>
        <div className="video_list_container hide-scrollbar overflow-y-scroll" style={{height: 'calc(100% - 270px)'}}>
                  <div className="video_list p-5 flex flex-col gap-3">
                      {
                          [...Array(10)].map((x,i) => <div key={i} className="video_detials flex justify-between rounded-md items-start px-3 py-2 bg-white shadow-base">
              <div className="video_thumbnail relative w-20 rounded-sm overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1690177930804-a144aa9941bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                  alt=""
                  fill
                />
              </div>
              <div className="video_info flex flex-col gap-1">
                <h4 className="video_title font-semibold">
                  Marjaryasana &#40;Cat-cow pose&#41;
                </h4>
                <div className="video_misc_details  flex items-center gap-5">
                  <div className="flex items-center max-w-fit px-3 py-[0.12rem] gap-3 bg-light-gray rounded-md">
                    <ClockIcon className="w-3 fill-white m-0" />
                    <p className="text-base text-white">3 minutes</p>
                  </div>
                  <div className="watch_time capitalize text-center border border-light-gray text-light-gray flex items-center px-3 py-[0.35rem] bg-white rounded-md">
                    <p className="text-sm">morning</p>
                  </div>
                </div>
              </div>
              <LikeButton />
            </div>)
                      }
            
          </div>
        </div>
      </div>
     {children}
    </section>
  );
};

export default MasterScreenTwo;
