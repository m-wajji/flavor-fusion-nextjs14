import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/heroSectionImage.jpg";
import { Separator } from "@/components/ui/separator"


export const Hero = () => {
  return (
    <div className="flex flex-col py-[20px] w-full mt-[67px] pl-[100px]  justify-center">
      <div className="flex">
        <div className="flex flex-col">
          <div className="font-sans font-medium text-[60px] leading-tight">
            Create Delicious Recipes From Your Pantry:
          </div>
          <div className="font-sans font-semibold text-[60px] text-[#C19102] leading-tight mt-14">
            "Ingredient-Inspired Magic!"
          </div>
        </div>

        <Image
          src={HeroImage}
          alt="HeroImage"
          style={{ objectFit: "cover" }}
          className="w-[435px] h-[381px]"
        />
      </div>

      <div className="font-sans text-base text-[#707070] w-[600px] ">
        "Elevate your cooking with ease! Our ingredient-based recipe generator
        simplifies mealtime by transforming your pantry staples into delicious
        dishes. Say goodbye to kitchen stress and hello to culinary creativity.
      </div>
      <Separator className="mt-8 mr-[100px]"/>
    </div>
  );
};
