import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/heroSectionImage.jpg";
import { Separator } from "@/components/ui/separator"
import banner from '../../public/assets/home-banner-background.png'
import { Navbar } from "../navbar/Navbar";
import robot2 from  '../../public/assets/robot2.png'
export const Hero = () => {
  return (
    <div className="flex flex-col w-full pl-[100px]  justify-center" >
      <div className="flex flex-col">
        <Navbar />
        <div className="home-bannerImage-container ">
          <Image src={banner} alt="" />
        </div>
       <div  className="flex">
       <div className="flex flex-col">
          <div className=" w-[693px] font-bold text-[60px] leading-[73.14px]  mt-[100px]">
            Create Delicious Recipes From Your Pantry:
          </div>
          <div className=" font-semibold text-[60px] text-[#e0672f] leading-tight mt-10 w-[693px] ">
            "Ingredient-Inspired Magic!"
          </div>
        </div>

        <div className="home-image-section mr-6">
          <Image src={robot2} alt=""/>
        </div>
       </div>

        {/* <Image
          src={HeroImage}
          alt="HeroImage"
          style={{ objectFit: "cover" }}
          className="w-[435px] h-[381px]"
        /> */}
      </div>

      <div className="font-sans text-base text-[#707070] w-[600px] ">
        "Elevate your cooking with ease! Our ingredient-based recipe generator
        simplifies mealtime by transforming your pantry staples into delicious
        dishes. Say goodbye to kitchen stress and hello to culinary creativity.
      </div>
      <Separator className="mt-8 mr-[100px]" />
    </div>
  );
};
