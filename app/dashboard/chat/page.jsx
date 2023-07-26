"use client"
import React from 'react'
import Lottie from "lottie-react";
import CustomHeader from "@/ui/CustomHeader";
import BackButton from './BackButton';
import Link from 'next/link'
import ImageJson from '/public/icons/chat_with_us.json'
import UserName from './UserName';

const Page = () => {
  return (
    <section id='chat' style={{height: 'calc(100% - 64px)'}}>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton />
        <h3 className="font-bold text-base uppercase flex-1 text-center text-light-gray">
         chat with us
        </h3>
      </CustomHeader>
      <div className="chat_section p-5 h-full">
        <div className="chat_container flex flex-col gap-3 p-1 justify-center items-center">
          <Lottie
            animationData={ImageJson}
            className="w-96"
            loop={false}
          /> 
          <UserName/>
          <h3 className='text-center'>If you have any query or issue then kindly reach us via chat support. Please click button below to chat with us.</h3>
          <Link className="uppercase bg-[#48ac48] font-semibold px-5 py-2 rounded-md text-white" href='https://api.whatsapp.com/send?phone=7572830270' target="_blank">
            chat now
          </Link>
        </div>
      </div>
  </section>
  )
}

export default Page