"use client"
import React from 'react'
import PrevButton from "@/public/icons/back_button.svg";
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

const BackButton = ({btnClass}) => {
    const router = useRouter()
  return (
      <PrevButton role='button' onClick={() => router.push('/dashboard/home')} className={clsx("m-0", {
          [btnClass]:!!btnClass
      }) } />
  )
}

export default BackButton
