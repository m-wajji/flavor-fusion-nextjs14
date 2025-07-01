// 
import React from 'react'
import { Button } from '../ui/button'
import { FaWandMagicSparkles } from "react-icons/fa6";
import Link from 'next/link';

export const RecipeGenerator = () => {
  return (
    <div className='flex flex-col items-start ml-32 mt-20'>
        <div className='mb-4 text-2xl ml-28  font-semibold'>Available Tool</div>
        <div className='flex flex-col items-center justify-center text-xl border bg-[#ffea88] border-black rounded-lg p-9'>
            <h1>Recipe Generator</h1>
            <div className='flex items-center'>
                <FaWandMagicSparkles size={34} className='mr-5'/>
                <div className='text-sm'>Use AI to generate recipe from scratch</div>
            </div>
            <Button className='bg-white hover:bg-white text-black mt-4 rounded-xl w-28' variant={'outline'}>
                <Link href='/dashboard/create'>Generate</Link>
            </Button>
        </div>
    </div>
  )
}
