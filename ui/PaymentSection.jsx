import React from 'react';
import '@/styles/paymentSection.css';
import ChatSvg from '@/public/icons/chat_icon.svg';
const PaymentSection = () => {
  return (
    <div className='paymentsection_wrapper px-4 pb-5'>
        <div className='pt-4'>
            <ChatSvg className="w-52 h-20"/>
            <div className='paymentsection_content flex gap-3 justify-center items-center'>
            <h3 className='paymentsection_4000'>₹4000</h3>

                <h3 className='paymentsection_3000'>Pay ₹3000</h3>
               
            </div>
        </div>
    </div>
  )
}

export default PaymentSection