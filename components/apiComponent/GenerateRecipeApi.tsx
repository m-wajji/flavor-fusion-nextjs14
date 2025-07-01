"use client"
// components/RecipeGenerator.tsx
import { useState } from 'react';
import { Button } from '../ui/button';
import { IoFastFood } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // For loading spinner
import { FaRegBookmark } from "react-icons/fa6";
import { MdCancel } from 'react-icons/md';
import { SignInButton } from '@clerk/nextjs';

const GenerateRecipeApi: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipe, setRecipe] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // New loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setRecipe('');
    setLoading(true); // Set loading to true when starting the request

    try {
      const response = await fetch('/api/generateRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredients.split(',').map(ing => ing.trim()) }),
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setRecipe(data.recipe);
        setIngredients(''); // Clear the input field
      }
    } catch (err) {
      setError("An error occurred while generating the recipe.");
    } finally {
      setLoading(false); // Reset loading to false after the request is completed
    }
  };

  const handleCancel = () => {
    setRecipe(''); // Clear the generated recipe
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-6" style={{ backgroundImage: "url('/assets/background.jpg')" }}>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full bg-opacity-80">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Recipe Generator</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block text-gray-700 mb-2">
            Enter Ingredients (comma separated):
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </label>
          <Button className="w-full rounded-[10px] bg-[#e07300] hover:bg-orange-500 flex justify-center items-center" variant="outline" disabled={loading}>
            {loading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                Generating...
              </>
            ) : (
              <>
                Generate Recipe
                <IoFastFood className="size-5 ml-[10px]" />
              </>
            )}
          </Button>
        </form>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {recipe && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Generated Recipe</h2>
          
          <button onClick={handleCancel} className="text-gray-700 hover:text-red-500 flex items-center">
                  <MdCancel size={24} className="" />
                </button>
        </div>
        <p className="text-gray-700 whitespace-pre-line">{recipe}</p>
        <SignInButton mode="redirect">
        <Button  className="text-gray-700 mt-6 ml-32 bg-orange-500  hover:bg-orange-500">
            <FaRegBookmark  size={15} /> Save Recipe
          </Button>
          </SignInButton>
      </div>
    )}
      </div>
    </div>
  );
};

export default GenerateRecipeApi;
