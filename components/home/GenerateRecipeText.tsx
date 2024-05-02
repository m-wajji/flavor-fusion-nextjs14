import React from 'react'

interface GenerateRecipeTextProps {
    stepNo: string;
    title: string;
    description: string;
}


export const GenerateRecipeText = ({ stepNo, title, description }: GenerateRecipeTextProps) => {
    return (
        <div className='mt-5 '>
            <div className='w-[100px] h-[50px] bg-[#FFDE7B] rounded-[10px] flex items-center justify-center font-sans font-bold'>{stepNo}</div>
            <div className='font-bold text-lg mt-8'>{title}</div>
            <div className='mt-2 text-sm'>{description}</div>
        </div>
    )
}
