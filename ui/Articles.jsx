import Image from 'next/image'
import React from 'react'
import BabyImage from '@/public/images/Rectangle_3.png';
import '@/styles/articles.css'
const Articles = ({title, description}) => {
  return (
   
        <div className='articles_wrapper overflow-hidden'>
            <h4 className='articles_title'>{title}</h4>
            <div className='articles_image px-5'>
                <Image src={BabyImage} alt='image'/>
            </div>
            <p className='articles_descripition'>{description}</p>
        </div>
   
  )
}

export default Articles