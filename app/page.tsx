import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import GenerateRecipeApi from "@/components/apiComponent/GenerateRecipeApi";
import { FAQ } from "@/components/FAQ/faq";



const Home = () => {

  return (
    <div className="flex flex-col">
      <Hero />
      <div id="recipe-generator" className="border">
        <GenerateRecipeApi />
      </div>
      <div id="faq" className="border items-center justify-center flex"> <FAQ /></div>
      <Footer />
    </div>
  );
};

export default Home;
