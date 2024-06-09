import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center' style={{ background: 'linear-gradient(135deg, #ffc61d, #fff5c5)' }}>
      <SignIn />
    </div>
  )
}

export default Page;
