
"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";

export const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className='mt-[50px]  h-[300px] bg-[#FF9D03] shadow-lg border rounded-2xl '>
      <div className='gap-y-5 flex flex-col items-center justify-center text-xl p-4 pt-20'>
        {/* Dashboard Link */}
        <div className='flex items-center gap-1 relative'>
          <RiDashboardHorizontalFill />
          <Link href='/dashboard'>
            <div>Dashboard</div>
          </Link>
          {pathname === '/dashboard' && <div className='absolute left-0 bottom-0 w-full h-1 bg-black'></div>}
        </div>

        {/* Cookbook Link */}
        <div className='flex items-center gap-1 relative'>
          <FaBook />
          <Link href='/dashboard/cookbook'>
            <div>Cookbook</div>
          </Link>
          {pathname === '/dashboard/cookbook' && <div className='absolute left-0 bottom-0 w-full h-1 bg-black'></div>}
        </div>

        {/* Account Details Link */}
        <div className='flex items-center gap-1 relative'>
          <BiSolidUserDetail size={28} />
          <Link href='/dashboard/accountDetails'>
            <div>Account Details</div>
          </Link>
          {pathname === '/dashboard/accountDetails' && <div className='absolute left-0 bottom-0 w-full h-1 bg-black'></div>}
        </div>
      </div>
    </div>
  );
};
