// 

import React from 'react';
import { IoBookmarksSharp } from "react-icons/io5";

// Define the props interface, including the button prop
interface GeneratedRecipeProps {
  pl?: string;
  pr?: string;
  pt?: string;
  ml?: string;
  width?: string;
  button?: React.ReactNode; // New button prop
}

export const GeneratedRecipe = ({ pl, ml, pt, pr, width, button }: GeneratedRecipeProps) => {
  return (
    <div className={`${pl} ${pr} ${pt} flex flex-col`}>
      <div className={`flex flex-col ${width}`}>
        <div className='flex items-center justify-center'>
          <div className='text-3xl font-bold'>Cheese and Avocado Sandwich</div>
          {button && <div className='ml-7'>{button}</div>} {/* Use the button prop */}
        </div>
        <div className={`${ml}`}>
          <div className='text-xl font-medium mt-16 mb-6'>Ingredients:</div>
          <ul className="list-disc ml-4 space-y-2">
            <li>100 grams Cheese</li>
            <li>2 pieces Bread</li>
            <li>1 piece Avocado</li>
            <li>20 grams Butter</li>
            <li>1 piece Spicy Pepper</li>
          </ul>
          <div className='text-xl font-medium my-6'>Instructions:</div>
          <ul className="list-disc ml-4 space-y-2">
            <li>Toast the bread slices in a toaster.</li>
            <li>Spread butter on one side of each bread slice.</li>
            <li>Slice the avocado and the spicy pepper.</li>
            <li>Grate the cheese.</li>
            <li>Layer the avocado, spicy pepper, and cheese on one bread slice.</li>
            <li>Cover with the other bread slice.</li>
            <li>Cut the sandwich diagonally.</li>
            <li>Serve and enjoy!.</li>
          </ul>
          <div className='text-xl font-medium my-6'>Macros:</div>
          <ul className="list-disc ml-4 space-y-2">
            <li>Total Calories: 130kcal</li>
            <li>Carbs: 30g</li>
            <li>Proteins: 2g</li>
            <li>Fats: 0.5g</li>
          </ul>
        </div>
      </div>
    </div>
  );
};