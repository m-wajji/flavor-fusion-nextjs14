import React from 'react';
import Image from 'next/image';
import pattern from '../../public/assets/hamburger.jpg'
interface BannerProps {
    text: string;
}

export const Banner = ({ text }: BannerProps) => {
    return (
        <div className='bg-[#f8c027] mt-[8px] flex items-center justify-center h-[100px] w-full text-3xl font-bold'>
            <Image src={pattern} alt="" className='opacity-20 h-[100px] object-cover relative w-full'/>
            <div className='absolute'>{text}</div>
        </div>
    );
};
