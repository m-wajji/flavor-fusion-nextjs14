// GenerateRecipe.tsx

import React from 'react';
import { GenerateRecipeText } from './GenerateRecipeText';
import { ingredients } from './Ingredients';
import { SelectAccordion } from './SelectAccordian';
import { MealType } from './MealType';
import { CuisineType } from './Cuisine';
import { Button } from '../ui/button';
import { IoFastFood } from "react-icons/io5";

export const GenerateRecipe: React.FC = () => {
    // Define your ingredients data


    return (
        <div className='pl-[100px] flex flex-col pr-[80px] pt-[80px]'>
            <div className='flex justify-between items-center'>
                <GenerateRecipeText stepNo="Step 1" title="Add the ingredients that you have" description='Pick ingredients from the list' />
                <SelectAccordion ArrayOfOption={ingredients} placeholder="Add Ingredients" />
            </div>
            <div className='flex justify-between items-center mt-36'>
                <GenerateRecipeText stepNo="Step 2" title="Select meal type" description='You can select Lunch, Dinner and Breakfast' />
                <SelectAccordion ArrayOfOption={MealType} placeholder="Add Meal Type" />
            </div>
            <div className='flex justify-between items-center mt-36'>
                <GenerateRecipeText stepNo="Step 3" title="Select cuisine preferences" description='You can select cuisine that you want to eat' />
                <SelectAccordion ArrayOfOption={CuisineType} placeholder="Add Cuisine" />
            </div>
            <div className='flex justify-between items-center mt-36'>
                <GenerateRecipeText stepNo="Step 4" title="Finally generate!!!" description='Click the button to generate and wait for the magic to happen' />
                <Button className='w-[250px] rounded-[10px] bg-[#e07300] hover:bg-orange-500' variant="outline">Generate Recipe
                    <IoFastFood className='size-5 ml-[10px]'/>

                </Button>

            </div>
        </div>
    );
};

export default GenerateRecipe;
