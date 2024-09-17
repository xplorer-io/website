import TitleSection from "@/modules/about-us/HeroSection/TitleSection";
import BannerImage from "@/modules/about-us/HeroSection/BannerImage";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="overflow sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-0 lg:py-24">
            <TitleSection />
          </div>
          <BannerImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
