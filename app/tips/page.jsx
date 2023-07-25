import React from 'react'
import Image from "next/image";
import CustomHeader from '@/ui/CustomHeader';
import BackButton from '../account/BackButton';
import Tip from '@/ui/Tip';

const page = () => {
  return (
    <section className=''>
      <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton /> 
        <h3 className="font-bold text-base uppercase flex-1 text-center">
         today tip
        </h3>
          </CustomHeader>
          <Tip/>
    </section>
  )
}

export default page
