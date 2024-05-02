import React from 'react'
import logo from '../../public/assets/Logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <div className='flex px-[100px] py-[20px] w-full justify-between items-center'>
            <div className='flex justify-between items-center'>
                <Image src={logo} alt='logo' style={{ objectFit: 'cover' }} className='w-[125px] h-[110px]' />
                <div className='font-sans- text-[25px] font-medium ml-5'>Flavor</div>
                <div className='font-sans text-[25px] font-medium text-[#C19102]'> Fusion</div>
                <div className=' gap-20 flex items-center justify-between'>
                    <Link className='font-sans font-medium text-[20px] ml-28' href='/'> Create</Link>
                    <Link className='font-sans font-medium text-[20px]' href='/faq'> FAQ</Link>
                </div>
            </div>
            <div className=''>
                <div className='space-x-6'>
                    <Button className='w-[120px] rounded-[20px] bg-[#FFC107] hover:bg-yellow-600' variant="outline">Login</Button>
                    <Button className=' w-[120px] rounded-[20px] bg-[#FFC107] hover:bg-yellow-600' variant="outline" >Signup</Button>
                </div>
            </div>
        </div>
    )
}
