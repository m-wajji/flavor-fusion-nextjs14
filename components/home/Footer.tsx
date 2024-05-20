import Image from 'next/image'
import React from 'react'
import Logo from '../../public/assets/Logo.jpg'
import { Separator } from '../ui/separator'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='pl-[100px] flex flex-col mt-8 pr-[80px] pt-[10px] items-center justify-center'>
            <Separator/>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex mt-[100px]'>
                <div className=' text-[25px] font-medium '>Flavor</div>
                <div className=' text-[25px] font-medium text-[#C19102]'> Fusion</div>
                </div>
                <Image src={Logo} alt='' className='mt-7'/>
               <div className='text-[#5F7896] font-medium mt-5'>© Copyright 2024. Flavor Fusion. All rights reserved.</div>
               <div className='flex gap-5 my-5'>
               <FaXTwitter />
               <FaFacebook />
               <FaInstagram />


               </div>
            </div>
        </div>
    )
}
