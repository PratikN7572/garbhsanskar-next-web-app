"use client";
import { UserInfoContext } from '@/app/context/userInfoContext'
import React, { useContext } from 'react'
import LockIcon from "@/public/icons/ic_lock.svg";
const AddOnStatus = () => {
    const { state } = useContext(UserInfoContext)
    const { is_user_paid } = state?.data
    if (is_user_paid?.is_app_stop === 'Pause') {
        return (
            <div className="lock_icon_badge">
                <span className="text-xs">locked</span>
                <LockIcon className="lock_icon w-4 h-4" />
            </div>
        )
    }
}

export default AddOnStatus