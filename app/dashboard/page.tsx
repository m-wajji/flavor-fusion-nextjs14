import { Banner } from '@/components/dashboard/Banner'
import { Cookbook } from '@/components/dashboard/Cookbook'
import { RecipeGenerator } from '@/components/dashboard/RecipeGenerator'
import { Sidebar } from '@/components/dashboard/Sidebar'
import React from 'react'

const dashboardPage = () => {
  return (
    <div>
    <Banner text={"WELLCOME!!!!"} />
    <div className='flex w-full'>
      <div className='sticky  w-1/5 ml-32'>
        <Sidebar />
      </div>
      <div className='flex-grow w-4/5'>
      
        <RecipeGenerator/>
      </div>
    </div>
  </div>
  )
}

export default dashboardPage