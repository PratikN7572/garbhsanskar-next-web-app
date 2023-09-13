import React from 'react'
import '@/styles/scheduleDate.css';
const ScheduleDate = ({ date, day }) => {
  return (
    <div className='scheduleDate_wrapper'>
        <h3 className='scheduleDate_Title'>Choose your preferred date</h3>
        <div className='grid grid-cols-3 gap-4'>
        <div className='scheduleDate_First'>
            <h2 className='scheduleDate_Number1'>{date}</h2>
            <p className='scheduleDate_Day1'>{day}</p>
        </div>
        <div className='scheduleDate_Second'>
            <h2 className='scheduleDate_Number2'>{date}</h2>
            <p className='scheduleDate_Day2'>{day}</p>
        </div>
        <div className='scheduleDate_Second'>
            <h2 className='scheduleDate_Number2'>{date}</h2>
            <p className='scheduleDate_Day2'>{day}</p>
        </div>
        </div>
    </div>
  )
}

export default ScheduleDate