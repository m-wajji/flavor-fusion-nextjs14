import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-auto w-screen  items-center justify-center' style={{ background: 'linear-gradient(135deg, #ffc61d, #fff5c5)' }}>
        <SignUp/>
    </div>
  )
}

export default page