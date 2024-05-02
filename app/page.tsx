import { Footer } from "@/components/home/Footer";
import { GenerateRecipe } from "@/components/home/GenerateRecipe";
import { GeneratedRecipe } from "@/components/home/GeneratedRecipe";
import { Hero } from "@/components/home/Hero";
import { Navbar } from "../components/navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <GenerateRecipe />
      <GeneratedRecipe />
      <Footer />
    </div>
  );
};

export default Home;
