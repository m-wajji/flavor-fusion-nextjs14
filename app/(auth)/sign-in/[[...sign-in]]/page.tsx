import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-orange-500'>
      <SignIn />
    </div>
  )
}

export default Page;
