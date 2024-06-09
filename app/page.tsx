import { Footer } from "@/components/home/Footer";
import { GenerateRecipe } from "@/components/home/GenerateRecipe";
import { GeneratedRecipe } from "@/components/home/GeneratedRecipe";
import { Hero } from "@/components/home/Hero";
import { Navbar } from "../components/navbar/Navbar";
import { IoBookmarksSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
const Home = () => {

  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <Hero />
      <GenerateRecipe />
      <GeneratedRecipe pl="pl-[100px]" pr="pr-[80px]" pt="pt-[150px]" ml="ml-[250px]" width="w-[1000px]" 
          button={
            <Button className='bg-[#e07300] hover:bg-orange-500'>
              <IoBookmarksSharp />
            </Button>
          } />
      <Footer />
    </div>
  );
};

export default Home;
