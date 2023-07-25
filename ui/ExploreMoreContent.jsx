import React from 'react'
import Image from 'next/image'
const ExploreMoreContent = () => {
  return (
      <div className='flex flex-col items-center'>
          <div className="relative w-20 aspect-square rounded-md overflow-hidden">
           <Image
            src="/images/profile_img.webp"
            alt="thumbnail"
            fill
            loading="lazy"
              />
          </div>
          <h5 className='text-primary-pink leading-5 text-center p-1'>this is the dummy text &#40;Day1&#41;</h5>
    </div>
  )
}

export default ExploreMoreContent