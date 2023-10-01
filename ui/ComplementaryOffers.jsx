import React from 'react';
import '@/styles/complementaryoffers.css';
import Image from 'next/image';
import MarkImage from '@/public/images/Mask group.png';
import FreeSvg from '@/public/icons/free.svg';
import de from 'date-fns/esm/locale/de/index.js';

const ComplementaryOffers = ({title, time, description, }) => {
  return (
    <>
        <div className='paymentcomplementary_wrapper'>
            <div className='flex gap-3 justify-between'>
                <h3 className='paymentcomplementary_title'>{title}</h3>
                <h4 className='paymentcomplementary_time'>{time}</h4>
            </div>
        </div>
        <div  className='pt-4'>
            <div className= 'complementarycard_wrapper '>
                <div className='relative'>
                    <Image src={MarkImage} alt='image'/>
                    <p className='complementarycard_title'>{description}</p>
                    <div className='absolute top-2 right-4'><FreeSvg className="w-11 h-9 -mr-3"/></div>
                </div>
                
               </div>
        </div>
        </>
  )
}

export default ComplementaryOffers