import React, { ReactNode } from 'react';
import { UserResource } from '@clerk/types';
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavbarProps {
  button?: ReactNode;
  user?: UserResource | null | undefined;
  userButton?: React.ReactNode;
}

export const Navbar = ({ button, user, userButton }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center py-5 px-8">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="text-[45px] font-medium">Flavor</div>
        <div className="text-[45px] font-medium text-[#C19102]">Fusion</div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 justify-center gap-8 hidden lg:flex">
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="/">Create</Link>
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="/FAQ">FAQ</Link>
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="/About Us">About Us</Link>
      </div>

      {/* Right Section with User Info and Button */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          {/* User Info pushed to the right */}
          <span className='text-lg'>{user?.username}</span>
          {userButton}
        </div>

        {/* Additional Button (e.g., for mobile menu) */}
        {button}

        {/* Signup Link and Hamburger Menu for Mobile */}
        <Link href="/auth/signup" className="lg:hidden">Signup</Link>
        <RxHamburgerMenu className="flex md:hidden items-center" size={30} />
      </div>
    </div>
  );
};
