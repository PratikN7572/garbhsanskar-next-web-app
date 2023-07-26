'use client';

import getUserInfoData from '@/lib/getUserInfoData';
import React, { useEffect, useState } from 'react'

const UserNameSkeleton = () => {}

const UserName = () => {
    const [usersname, setUsersname] = useState("")
    const userInfo = async () => {
        const data = JSON.parse(localStorage.getItem('user'))
        const username = await getUserInfoData(data?.token, data?.device_id)
        setUsersname(username?.data?.full_name)
    }
    useEffect(() => {
        userInfo();
    }, [])
    
  return (
    <h3 className='text-primary-pink font-semibold text-2xl'>{usersname}</h3>
  )
}

export default UserName