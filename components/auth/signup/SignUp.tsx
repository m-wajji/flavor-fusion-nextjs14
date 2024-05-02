import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/Logo.jpg";
import OrLine from "../../../public/assets/or.jpg";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className=" flex flex-col w-[578px] h-[870px] bg-white mt-14 rounded-3xl mb-[150px]">
      <div className=" flex flex-col items-center text-center mt-6 gap-4">
        <div>
          <Image src={Logo} alt="Logo" style={{ objectFit: "cover" }} />
        </div>

        <div className="text-2xl text-[#C19102] font-bold">Signup</div>
      </div>

      <div className="flex flex-col items-center mt-10 gap-4">
        <div>
          <div className="mb-2 ml-3">Email</div>

          <Input
            type="email"
            className="w-[300px] h-[50px] rounded-2xl  border-[#FFC107] border-2"
          />
        </div>
        <div className="">
          <div className="mb-2 ml-3">Password</div>

          <Input
            type="password"
            className="w-[300px] h-[50px] rounded-2xl  border-[#FFC107] border-2"
          />
        </div>
        <div className="">
          <div className="mb-2 ml-3">Re-Enter Password</div>

          <Input
            type="password"
            className="w-[300px] h-[50px] rounded-2xl  border-[#FFC107] border-2"
          />
        </div>
        <div className="flex flex-col items-center mb-20">
          <Button className="text-center mt-10 bg-[#FFC107] rounded-2xl text-black w-[150px] h-[50px]">
            Signup
          </Button>

          <Image src={OrLine} alt="OrLine" className="my-10" />

          <Button
            variant={"outline"}
            className="gap-4 text-[#C19102] rounded-2xl w-[300px] h-[50px] border-[#FFC107]"
          >
            <FcGoogle size={48} />
            Continue with Google
          </Button>

          <Link href={"/auth/login"} className="font-medium mt-[35px]">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};
