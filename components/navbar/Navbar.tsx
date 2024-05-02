import React from "react";
import logo from "../../public/assets/Logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="flex px-[100px] my-[20px] w-full h-[120px] justify-between items-center">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          style={{ objectFit: "cover" }}
          className=""
        />
        <div className="font-sans text-[25px] font-medium ml-3">Flavor</div>
        <div className="font-sans text-[25px] font-medium text-[#C19102]">
          Fusion
        </div>
        <div className="flex items-center gap-8">
          <Link className="font-sans font-medium text-[20px] ml-20 " href="/">
            {" "}
            {/* border border-x-0 border-t-0 border-b-2 border-b-[#C19102] put this by condition */}
            Create
          </Link>
          <Link className="font-sans font-medium text-[20px]" href="/FAQ">
            FAQ
          </Link>
        </div>
      </div>
      <div className="">
        <div className=" flex gap-[30px]">
          <Button
            className="w-[120px] rounded-[20px] bg-[#FFC107] hover:bg-yellow-600"
            variant="outline"
          >
            <Link href={"/auth/login"}>Login</Link>
          </Button>
          <Button
            className=" w-[120px] rounded-[20px] bg-[#FFC107] hover:bg-yellow-600"
            variant="outline"
          >
            <Link href={"/auth/signup"}>Signup</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
