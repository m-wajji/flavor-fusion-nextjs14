import React from "react";
import logo from "../../public/assets/Logo.jpg"; // If you plan to use the logo, uncomment
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // If you plan to use Button component, uncomment
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  return (
    <div className="flex w-full my-[55px] justify-between items-center px-8">
      <div className="flex items-center gap-2">
        <div className="text-[45px]  font-medium">Flavor</div>
        <div className="text-[45px] font-medium text-[#C19102]">Fusion</div>
      </div>
     
      <div className="flex-1  justify-center gap-8 hidden lg:flex">
      <Link className="font-medium text-[20px]" href="/">Create</Link>
       
        <Link className="font-medium text-[20px]" href="/FAQ">
          FAQ</Link>
          <Link className="font-medium text-[20px]" href="/About Us">
          About Us
        </Link>

      </div>
      <div className="flex lg:items-center items-center justify-between w-fit gap-9">
        <Link href={"/auth/login"}>Login</Link>
        <Button
          className="w-[150px] hidden lg:flex rounded-[20px] bg-[#ffffff] hover:bg-orange-500 h-[50px]"
          variant="outline"
        >
          <Link href={"/auth/signup"}>Signup</Link>
        </Button>
        <Link href={"/auth/signup"} className="lg:hidden">Signup</Link>
        <RxHamburgerMenu  className='flex  md:hidden  items-center justify-between' size={30}/>

      </div>
    </div>
  );
};
