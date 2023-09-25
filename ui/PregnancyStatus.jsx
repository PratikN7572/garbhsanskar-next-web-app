import React from 'react';
import '@/styles/pregnancyStatus.css';
import Image from 'next/image';
import PregnantImg from '@/public/images/Pregnant.png';
import ActivitySvg from '@/public/icons/daily_activity.svg';
const PregnancyStatus = ({}) => {
  return (
    <div className='p-4'>
        <h4 className='pregnancy_choice'>"Your Pregnancy Choice"</h4>
        <div className='flex gap-2 justify-center pt-4'>
        <div className='pregnancy_card'>
            <Image src={PregnantImg} alt='image'/>
            <h4 className='pregnancy_status '>Pregnant</h4>
        </div>
        </div>
        <h3 className='pregnancy_features'>Features and Benefits</h3>
        <div className='pregnancy_benefits'>
            <div className=' w-fit'>
                <div className='flex'>
                <ActivitySvg className="w-9 h-9"/>
                <h5 className='pregnancy_benefits_text pt-1'>5000+ Activities</h5>
                </div>
            </div>
        </div>
        <h4 className='pregnancy_desc'>“Enter the Pregnancy Planner Experience, Where Every Moment is Enriched with Care, Knowledge, and Heartfelt Connections."</h4>
        <button className='pregnancy_button'><h3 className='pregnancy_button_text'>Start Planning</h3></button>
    </div>
  )
}

export default PregnancyStatus