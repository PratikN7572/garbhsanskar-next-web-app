import React from 'react';
import Image from 'next/image';
import '@/styles/Testimonial.css';
import PolygonIcon from '@/public/icons/polygon_icon.svg';
import UserImage from '@/public/images/Ellipse_1.png';
import LeftSvg from '@/public/icons/leftside.svg';
import RightSvg from '@/public/icons/rightside.svg';
const Testimonial = ({title, descripition, username}) => {
  return (
   <div >
        <div className='testimonial_wrapper'>
            <h3 className='testimonial_title p-4'>{title}</h3>
            <p className='testimonial_descripition p-4'>{descripition}</p>
            
        </div>
        <div className='testimonial_svg '>
            <PolygonIcon className="w-20 h-20 px-6"/>
        </div>  
        <div className='testimonial_user flex justify-center items-center px-4'>
            <LeftSvg className="w-20 h-20"/>
            <div className='grid grid-cols-5 gap-5 justify-center'>
            <div className=''>
                <Image src={UserImage} alt='image' />
                <h5 className='testimonial_user_name'>{username}</h5>
            </div>
            <div className=''>
                <Image src={UserImage} alt='image' />
                <h5 className='testimonial_user_name'>{username}</h5>
            </div>
            <div className=''>
                <Image src={UserImage} alt='image' />
                <h5 className='testimonial_user_name'>{username}</h5>
            </div>
            <div className=''>
                <Image src={UserImage} alt='image' />
                <h5 className='testimonial_user_name'>{username}</h5>
            </div>
            </div>
            <RightSvg className="w-20 h-20"/>
        </div>
        </div>
  )
}

export default Testimonial