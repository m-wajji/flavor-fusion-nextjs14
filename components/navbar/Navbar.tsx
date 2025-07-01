"use client";
import React, { ReactNode } from 'react';
import { UserResource } from '@clerk/types';
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';

interface NavbarProps {
  button?: ReactNode;
  userButton?: React.ReactNode;
}

export const Navbar = ({ button, userButton }: NavbarProps) => {
  const { user } = useUser(); // Fetch the current user data

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between items-center py-5 px-8">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="text-[45px] font-medium">Flavor</div>
        <div className="text-[45px] font-medium text-[#C19102]">Fusion</div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 justify-center gap-8 hidden lg:flex">
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="#recipe-generator" onClick={() => scrollToSection('recipe-generator')}>Create</Link>
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="#faq" onClick={() => scrollToSection('recipe-generator')}>FAQ</Link>
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="#about-us" onClick={() => scrollToSection('recipe-generator')}>About Us</Link>
      </div>

      {/* Right Section with User Info and Button */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          {/* User Info pushed to the right */}
          <SignedIn>
            {user && <span className='text-lg'>{user.username}</span>}
            <UserButton />
          </SignedIn>
        </div>

        {/* Additional Button (e.g., for mobile menu) */}
        <SignedOut>
          {button}
        </SignedOut>

        {/* Signup Link and Hamburger Menu for Mobile */}
        <SignedIn>
          <Button className='bg-white text-black hover:bg-orange-500'>
            Saved Recipe
          </Button>
        </SignedIn>
      </div>
    </div>
  );
};