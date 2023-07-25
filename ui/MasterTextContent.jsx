'use client';
import { ModuleContext } from '@/app/context/moduleContext';
import React, { useContext } from 'react'

const MasterTextContent = () => {
  const { state } = useContext(ModuleContext)
  console.log('state',state)
    // const { description } = state?.data?.[0]
    
  return (
    <div className='p-3'><span className='text-center'>abxc</span></div>
  )
}

export default MasterTextContent