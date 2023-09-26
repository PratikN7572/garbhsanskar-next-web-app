import React from 'react'
import '@/styles/paymentCoreBenifits.css';
import DailyActivitySvg from '@/public/icons/daily_activity.svg';
import DailyLeftSvg from '@/public/icons/daily_left.svg';
import RecordedSvg from '@/public/icons/recorded.svg';
import TrackingSvg from '@/public/icons/tracking.svg';
import HarmonySvg from '@/public/icons/harmony.svg';
import GuidedSvg from '@/public/icons/guided.svg';
const core_benifits = [
  {
  id: 1,
  title: 'Daily Activities',
  description: '"Explore 3885 Practicable Activities for Babys 4Q Development Through Daily 12 Engaging Sessions on Our Pregnancy App."',
  icon: <DailyActivitySvg/>,
  color: '#FF7299',
  },
  {
    id: 2,
    title: 'Recorded Expert Session',
    description: '"Unlock Limitless Wisdom: Dive into 40+ Hours of Expert Sessions, Transforming Your Pregnancy Journey with Invaluable Insights."',
    icon: <RecordedSvg/>,
    color: '#67ADFF',
    },
    {
      id: 3,
      title: 'Tracking & Reports',
      description: '"Daily Tips, Activities, Tracking & Reports: Elevate Your Pregnancy Experience with Our All-Inclusive App."',
      icon: <TrackingSvg/>,
      color: '#01BCC8',
      },
      {
        id: 4,
        title: 'Harmony',
        description: '"Daily Tips, Activities, Tracking & Reports: Elevate Your Pregnancy Experience with Our All-Inclusive App."',
        icon: <HarmonySvg/>,
        color: '#D187FF',
        },
        {
          id: 5,
          title: 'Guided Pregnancy',
          description: '“Personalized Non-Medical Counseling via WhatsApp & Calls for Empowering Support on Your Journey to Motherhood."',
          icon: <GuidedSvg/>,
          color: '#FFDD63',
          },
  ]
const PaymentCoreBenifits = () => {
  return (
    <div className='paymentcorebenifits_wrapper'>
        <div className=''> 
        {core_benifits.map((benefits, x) =>(
<div key={x} className='flex gap-4 '>
    <div className='w-16 h-16' >{benefits.icon}</div>
    <div className=''>
    <h3 className='paymentcorebenifits_title'>{benefits.title}</h3>
    <p className='paymentcorebenifits_description'>{benefits.description}</p>
    <hr className='h-1  mb-1'></hr>
    </div>
    
    <DailyLeftSvg className="w-20 h-20 pt-8"/>
    
    </div>
  ))}
    
   


    </div>
    </div>
  )
}

export default PaymentCoreBenifits