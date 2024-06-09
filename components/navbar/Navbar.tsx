import React, { ReactNode } from 'react';

import logo from "../../public/assets/Logo.jpg"; // If you plan to use the logo, uncomment
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // If you plan to use Button component, uncomment
import { RxHamburgerMenu } from "react-icons/rx";


interface NavbarProps {
  button?: ReactNode;
  link?: ReactNode;
}

export const Navbar = ({ button,link}:  NavbarProps) => {
  return (
    <div className="flex  my-[40px] justify-between items-center mx-8">
      <div className="flex items-center gap-2">
        <div className="text-[45px]  font-medium">Flavor</div>
        <div className="text-[45px] font-medium text-[#C19102]">Fusion</div>
      </div>

      <div className="flex-1  justify-center gap-8 hidden lg:flex">
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="/">Create</Link>

        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="/FAQ">
          FAQ</Link>
        <Link className="font-medium text-[20px] hover:text-[#C19102]" href="/About Us">
          About Us
        </Link>

      </div>
      <div className="flex lg:items-center items-center justify-between w-fit gap-9 hover:text-[#C19102]">
        {link}
        {button}

        <Link href={"/auth/signup"} className="lg:hidden">Signup</Link>
        <RxHamburgerMenu className='flex  md:hidden  items-center justify-between' size={30} />

      </div>
    </div>
  );
};
