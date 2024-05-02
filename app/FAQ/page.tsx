import { FAQ } from "@/components/FAQ/faq";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const FAQPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center ">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
