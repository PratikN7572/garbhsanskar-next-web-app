import React from 'react'
// import "@/styles/activityDescriptionCard.css";
const ActivityDescriptionCard = ({title, svg1, svg2, descriptions}) => {
  return (
    <div>
    <div className="main">
      <div className="flex">
      <>{svg1}</>
      <h3>{title}</h3>
      </div>
      <div className='description flex gap-3'>
        <>{svg2}</>
        <p>{descriptions}</p>
      </div>
    </div>
  </div>
  )
}

export default ActivityDescriptionCard