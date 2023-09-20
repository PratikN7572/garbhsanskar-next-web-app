import React from 'react';
import '@/styles/applyCoupon.css';
import ApplyButton from '@/public/icons/applyleft.svg';
import Coupon from './Coupon';

const ApplyCoupon = () => {
  return (
    <div className='applycoupon_wrapper'>
<div>
    <button className='mr-80'> <ApplyButton className="h-16 w-20"/> </button>
    </div>
    <div className='applycoupon_content '>
        <h3 className='applycoupon_title'>Enter Coupon Code </h3>
        <button className='applycoupon_button'>Apply</button>
    </div>
    <div className='pt-4'>
        <Coupon title="GARBHGURU2023" offer="FLAT 25% OFF" apply="TAP TO APPLAY"/>
    </div>
    
    </div>
   
  )
}

export default ApplyCoupon