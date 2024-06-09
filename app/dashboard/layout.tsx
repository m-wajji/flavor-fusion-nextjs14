import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex flex-col w-full justify-center">
           <div className='pl-[100px]'><Navbar /></div>
            
            {children}
        </div>
    );
};

export default DashboardLayout;
