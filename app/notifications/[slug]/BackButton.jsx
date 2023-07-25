"use client"
import React from 'react'
import PrevButton from "@/public/icons/back_button.svg";
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter()
  return (
      <PrevButton role='button' onClick={() => router.push('/notifications')} className="m-0 w-7"/>
  )
}

export default BackButton
