"use client"
import React, { useCallback, useEffect, useState } from 'react'
import CustomCarousel from "@/ui/CustomCarousel";
import { useRouter } from 'next/navigation';
import { getPackageBasicInfo } from '@/lib/getPackageBasicInfo';
import { ToastContainer, toast } from "react-toastify";

const PaymentBanner = () => {
    const router = useRouter();
    const [packageDetails, setPackageDetails] = useState({})
    const fetchBasicPaymentDetails =useCallback( async () => {
        const data = JSON.parse(localStorage?.getItem('user'))
        
        if (!data.token) {
            router.push('/auth/login')
        }
        const response = await getPackageBasicInfo(data?.token, data?.user_key);
        if (response.status === 401) {
            toast.error(response.message, {
                className: "error_toast",
              });
        }
        setPackageDetails(response)
    },[router])
    useEffect(() => {
        fetchBasicPaymentDetails();
    }, [fetchBasicPaymentDetails])
          // for future refrence : pass the array of link of images.
    
  return (
      <>
          <ToastContainer />
    </>
  )
}

export default PaymentBanner
