"use client";
import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { ClerkProvider, UserButton, useUser } from '@clerk/nextjs';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const {user}=useUser();
    return (
        <div className="flex flex-col w-full justify-center">
           <div className='pl-[100px]'><Navbar user={user} userButton={<UserButton/>}/></div>
            {children}
        </div>

    );
};

export default DashboardLayout;
