import { AccountDetails } from '@/components/dashboard/AccountDetails'
import { Banner } from '@/components/dashboard/Banner'
import { Sidebar } from '@/components/dashboard/Sidebar'
import React from 'react'

const AccountDetailsPage = () => {
  return (
    <div>
    <Banner text={"ACCOUNT"} />
    <div className='flex w-full'>
      <div className='sticky  w-1/5 ml-32'>
        <Sidebar />
      </div>
      <div className=' w-4/5'>
        <AccountDetails />
      </div>
    </div>
  </div>
)
}

export default AccountDetailsPage