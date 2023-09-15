import React from 'react';
import '@/styles/paymentDeliveryCard.css';

const PaymentDeliveryCard = ({title, chipname, amount1, amount2}) => {
  return (
    <div className='paymentcard_wrapper'>
        <div className='flex gap-4 justify-between'>
        <h3 className='paymentcard_title'>{title}</h3>
        <div>
        <div className='paymentcard_chip'>
            <h5 className='paymentcard_chip_title'>{chipname}</h5></div>
            <div className='pt-4'> 
                <h3 className='paymentcard_3000'>{amount1}</h3>
                <h5 className='paymentcard_9000'>{amount2}</h5>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default PaymentDeliveryCard