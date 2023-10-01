import Image from 'next/image'
import React from 'react'
import child from '@/public/images/child.png';
import '@/styles/coupon.css';

const Coupon = ({title, offer, apply}) => {
  return (
    <div className='coupon_wrapper flex gap-6 py-2 px-4 w-full relative z-10 overflow-hidden'>
        <div className='pt-3 pl-3'>
            <Image src={child} alt='child'/>
           
        </div>
        <hr className='coupon_vector h-20'></hr>
        <div>
            <div className='pb-3'>
            <h4 className='coupon_title'>{title}</h4>
            <h3 className='coupon_off'>{offer}</h3>
            </div>
            <h5 className='coupon_tap_applay pl-10 pt-3'>{apply}</h5>
        </div>
        <div className='coupon_ellipseleft absolute w-10 h-10 rounded-full -z-10 -left-5 top-7'></div>
        <div className='coupon_ellipseright absolute w-10 h-10 rounded-full -z-10 -right-5 top-7'></div>
    </div>
  )
}

export default Coupon