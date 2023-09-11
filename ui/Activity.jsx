import React from 'react';
import '@/styles/activity.css'
const Activity = ({ url, activityType, activityDescription }) => {
  return (
    <div className='activity_wrapper'>
      <div className='activity_image' style={{ background: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      </div>

      <div className='activity_text_content'>
        <h3 className='activity_title '>{activityType}</h3>
        <hr className='activity_border'></hr>
        <p className='activity_message'>{activityDescription}</p>
      </div>
    </div>
  )
}

export default Activity