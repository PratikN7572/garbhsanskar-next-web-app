import React from 'react'
import '@/styles/paymentScreen.css';
import Image from 'next/image';
import FirstImage from '@/public/images/Rectangle_1.png';
import SecondImage  from '@/public/images/Rectangle_2.png';
import Testimonial from './Testimonial';
import Articles from './Articles';
import PaymentSlider from './PaymentSlider';
import PaymentDeliveryCard from './PaymentDeliveryCard';
import RightApply from '@/public/icons/right_apply.svg';
import PaymentCoreBenifits from './PaymentCoreBenifits';
import ComplementaryOffers from './ComplementaryOffers';
import PaymentSection from './PaymentSection';

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
      <h3 className='payment_third_descripition'>Choose Your Plan</h3>
      <div className='px-4'>
      <PaymentSlider title="Till Delivery" days="30 Days"/>
      </div>
      <div className='px-4 pt-4'>
        <PaymentDeliveryCard title="Till Delivery" chipname="67%off" amount1="₹3000" amount2="₹9000"/>
      </div>
     <div className='px-4'>
        <h3 className='payment_third_descripition !px-0'>Offers and Benefits</h3>
        <div className='payment_apply_coupon px-4 '><button className='payment_apply_coupon_title'>Apply Coupon <span><RightApply className=" w-15 h-15 pt-2 ml-48"/></span></button>
        </div>
     </div>
     <div className='px-4'>
     <h3 className='payment_forth_descripition !px-0'>Core Benifits</h3>
     <PaymentCoreBenifits title="Daily Activities" description={"Explore 3885 Practicable Activities for Baby's 4Q Development Through Daily 12 Engaging Sessions on Our Pregnancy App."}/>
     </div>
     <div className='px-4'>
      <h3 className='payment_fifth_descripition !px-0'>Complementary offers</h3>
      <ComplementaryOffers title="Offer Expires In :" time="6 days : 24 hours : 20 mins : 23 sec" description="Experience 272 Enriching Sessions to Nurture Your Journey."/>
      <div><h3 className='payment_sixth_descripition'>"Begin Your Journey to a Happy Child Today!"</h3></div>
      <div>
        <PaymentSection />
      </div>
     </div>
    </div>
  )
}

export default Payment