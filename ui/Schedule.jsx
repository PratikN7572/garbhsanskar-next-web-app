import React from 'react';
import '@/styles/schedule.css';
import Image from 'next/image';
import BannerImage from '@/public/images/BannerImage.png';
import ScheduleDate from './ScheduleDate';
import ScheduleAfternoon from './ScheduleAfternoon';
const Schedule = () => {
  return (
    <>
    <div className='schedule_wrapper'>
       <div className='schedule_Banner'>
    
        <h3 className='schedule_BookNow'>Book Now - For Free</h3>
        <div className='schedule_card relative w-full'>
           <Image src={BannerImage}  alt='image' fill/>
           <div className='relative'>
           <h3 className='schedule_Title'>Garbhsanskar Workshop</h3> 
           <p className='schedule_Planner'>For Pregnant and Planners</p>
           </div>
        </div>
        <div className='schedule_Description'>
            <h4 className='schedule_Description1'>Pregnancy lessons you won't learn from books.</h4>
            <h5 className='schedule_Description2'>Our gift to new moms: Premium pregnancy program completely free of cost !</h5>
        </div>
      </div>
     
        </div>
        <ScheduleDate  date="18" day="Tue"/>
        <ScheduleAfternoon title="Afternoon" time="12:00 - 1:00 PM" slots="Only 2 slots left" time1="1:00 - 2:00 PM" />
        
        </>
  )
}

export default Schedule