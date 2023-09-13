import React from 'react'
import '@/styles/scheduleAfternoon.css';

const ScheduleAfternoon = ({title, time, time1, slots }) => {
  return (
    <div className='scheduleAfternoon_wrapper bg-[#F1F1F1]'>
        <h3 className='scheduleAfternoon_Title'>{title}</h3>
        <div className='grid grid-cols-3 gap-3'>
        <div className='scheduleAfternoon_First'>
            <div className='scheduleAfternoon_1'> 
            <h4 className=''>{time}</h4></div>
        </div>
        
            <div className='scheduleAfternoon_Graybottom overflow-hidden'>
                <div className='scheduleAfternoon_RedTop'>
                <p className='scheduleAfternoon_Slot h-4 pl-6 rounded-full'>{slots}</p>
                </div>
                <h3 className='scheduleAfternoon_Time pt-2'>{time1}</h3>
             </div>
             
             </div>
    </div>
  )
}

export default ScheduleAfternoon