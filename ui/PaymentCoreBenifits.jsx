import React from 'react'
import '@/styles/paymentCoreBenifits.css';
import DailyActivitySvg from '@/public/icons/daily_activity.svg';
import DailyLeftSvg from '@/public/icons/daily_left.svg';
const PaymentCoreBenifits = ({title, description}) => {
  return (
    <div className='paymentcorebenifits_wrapper'>
        <div className='paymentcorebenifits_line'> 
<div className='flex gap-1 overflow-hidden'>
    <DailyActivitySvg className="w-20 h-20" />
    <div className=''>
    <h3 className='paymentcorebenifits_title'>{title}</h3>
    <p className='paymentcorebenifits_description'>{description}</p>
     <hr className='h-1'></hr>
    </div>
    <DailyLeftSvg className="w-20 h-20 "/>
   
</div>

    </div>
    </div>
  )
}

export default PaymentCoreBenifits