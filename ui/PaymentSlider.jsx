import React from 'react';
import '@/styles/paymentSlider.css';

const PaymentSlider = ({title, days}) => {
  return (
    <div className='paymentslider_wrapper'>
<div className='paymentslider_content'>
    <div className='paymentslider_buttons '>
    <button className='paymentslider_title '>{title}</button>
    </div>
    <button className='paymentslider_days'>{days}</button>
</div>
    </div>
  )
}

export default PaymentSlider