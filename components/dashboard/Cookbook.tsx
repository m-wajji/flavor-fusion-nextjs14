
import React from 'react';
import { Button } from '../ui/button';
import { SavedRecipeButton } from './SavedRecipeButton';
import { GeneratedRecipe } from '../home/GeneratedRecipe';
import { MdDelete } from "react-icons/md";

export const Cookbook = () => {
    return (
        <div className='mt-32 mx-32'>
            {/* Saved Recipes Text */}
            <div className='text-2xl font-bold mb-8'>Saved Recipes</div>

            {/* Grid of Buttons */}
            <div className='grid grid-cols-3 gap-3'>
                <div>
                    <SavedRecipeButton component={<GeneratedRecipe button={
                        <Button className='bg-[#e07300] hover:bg-orange-500 mr-[-10px]'>
                            <MdDelete size={20}/>
                        </Button>
                    } />} />
                </div>
                <div>
                    <SavedRecipeButton component={<GeneratedRecipe button={
                        <Button className='bg-[#e07300] hover:bg-orange-500 mr-[-10px]'>
                            <MdDelete size={20}/>
                        </Button>
                    } />} />
                </div>


                <div>
                    <SavedRecipeButton component={<GeneratedRecipe button={
                        <Button className='bg-[#e07300] hover:bg-orange-500 mr-[-10px]'>
                            <MdDelete size={20}/>
                        </Button>
                    } />} />
                </div>


                <div>
                    <SavedRecipeButton component={<GeneratedRecipe button={
                        <Button className='bg-[#e07300] hover:bg-orange-500 mr-[-10px]'>
                            <MdDelete size={20}/>
                        </Button>
                    } />} />
                </div>

            </div>
        </div>
    );
};

