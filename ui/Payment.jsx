import React from 'react'
import '@/styles/paymentScreen.css';
import Image from 'next/image';
import FirstImage from '@/public/images/Rectangle_1.png';
import SecondImage  from '@/public/images/Rectangle_2.png';
import Testimonial from './Testimonial';
import Articles from './Articles';


const Payment = ({firstTitle, cardtitle, secondtitle,}) => {
  return (
    <div className='mainScreen'>
        <h3 className='payment_title'>{firstTitle} </h3>
        <div className='payment_wrapper'>
            <h3 className='payment_descripiton'>{cardtitle}</h3>
            <div className='grid grid-cols-2 gap-2 p-4 overflow-hidden'>
            <div className='payment_Image1'>
                <Image src={FirstImage} alt='FirstImage'/>
                </div>
                <div className='payment_Image2'>
                <Image src={SecondImage} alt='SecondImage' />
            </div>
            </div>
        </div>
        <h3 className='payment_second_descripiton'>{secondtitle}</h3>
        <div >
        <Testimonial title={"Empowering Daily Rituals"} descripition={"I can't express how much I value the daily activities in this app. They have become a significant part of my routine, helping me stay active, centered, and connected with my growing baby. It's like a daily dose of positivity and self-care that I look forward to."} username="Jenifer"/>
        </div>
        <div >
        <Articles title={"A Journey of Empowerment: Maria's Remarkable Pregnancy"} description="From the moment Maria downloaded the app, she felt an instant connection. The warm welcome and.... " />
        </div>
    </div>
  )
}

export default Payment