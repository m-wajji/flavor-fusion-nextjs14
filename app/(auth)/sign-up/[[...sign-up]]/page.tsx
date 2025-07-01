import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-auto w-screen  items-center justify-center bg-orange-500'>
        <SignUp/>
    </div>
  )
}

export default page