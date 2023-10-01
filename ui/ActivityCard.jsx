import React from 'react'
import "@/styles/activityCard.css";
import Link from 'next/link';

const ActivityCard = ({description, svg, title}) => {
  return (
    <div className='main'>
<h3>{description}</h3>
      <div className='flex flex-col'>
<Link href="/">{svg}</Link>
<p>{title}</p>
</div>
    </div>
  )
}

export default ActivityCard