'use client';
import React, { useContext } from 'react'
import Link from 'next/link'
import { UserInfoContext } from '@/app/context/userInfoContext';

import BellIcon from "@/public/icons/notification-alarm-buzzer-icon.svg";

const Notification = () => {
  const { state } = useContext(UserInfoContext)
  return (
    <Link href="/notifications" className="notification" role="link" aria-label="notification">
    <div className="ringing_bell_icon">
      <BellIcon fill="#e44672" width={24} height={24} />
    </div>
    <p className="title">notifications</p>
    {state?.data?.unread_notification_count > 0 && <span className='absolute -top-1 right-2 bg-red-500 rounded-full aspect-square h-5 w-5 text-sm grid place-content-center text-white text-center'>{state?.data?.unread_notification_count }</span>}
  </Link>
  )
}

export default Notification
