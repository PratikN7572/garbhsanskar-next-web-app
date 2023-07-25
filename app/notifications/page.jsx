import React, { Suspense } from 'react'
import CustomHeader from '@/ui/CustomHeader';
import BackButton from './BackButton';
// import NotificationsList from './notificationsList';
import dynamic from 'next/dynamic'
import { NotificationsListSkeleton } from './notificationsList';
const NotificationsList = dynamic(() => import('./notificationsList'))

const Page = () => {
  
  
  return (
    <section id='notifications' className='h-full'>
          <CustomHeader
        wrapperClass="border-b-2 shadow-dark"
        containerClass="flex items-center w-full h-full justify-start px-3"
      >
        <BackButton /> 
        <h3 className="font-bold text-base uppercase flex-1 text-center">
         notifications
        </h3>
          </CustomHeader>
      <div style={{ height: 'calc(100% - 64px)' }} className="wrapper_container overflow-y-scroll w-full px-2 flex flex-col items-start gap-5">
        <Suspense fallback={<p>Loading notifications</p>}>
          <NotificationsList />
          </Suspense>
              </div>
    </section>
  )
}

export default Page
