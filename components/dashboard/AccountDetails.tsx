import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const AccountDetails = () => {
  return (
    <div className='flex flex-col ml-32 mt-20'>
      <div className='text-2xl font-semibold mb-4'>Change your Account Details</div>
        <div>
        <div>
          <div className="mb-2 ml-3">Username</div>

          <Input
            type="" 
            className="w-[300px] h-[50px] rounded-2xl border-black "
          />
        </div>
        <div>
          <div className="mb-2 ml-3  mt-8">Email (cannot change)</div>

          <Input
            type="email" placeholder='walia.suleman@gmail.com'
            className="w-[300px] h-[50px] rounded-2xl   border-black"
          />
        </div>
        <div className='flex ml-20 mt-5 '>
        <Button className='bg-[#FFD946] hover:bg-[#FFD946] text-black border border-black'>Save Changes</Button>
        </div>
    
        </div>
    </div>
  )
}
