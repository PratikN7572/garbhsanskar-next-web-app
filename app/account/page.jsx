import CustomHeader from '@/ui/CustomHeader'
import React from 'react'

import UserInfo from '@/ui/UserInfo'
import ChangePassword from './changePassword'
import BackButton from './BackButton'

const Page = () => {
  return (
    <div className='w-full h-full'>
          <CustomHeader containerClass='flex items-center justify-between px-3'>
        <BackButton/>
        <h5 className='font-bold tracking-widest'>account</h5>
        <ChangePassword/>
      </CustomHeader>
     <UserInfo/>
    </div>
  )
}

export default Page
