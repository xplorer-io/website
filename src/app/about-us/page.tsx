import React from "react";
import BannerImage from "@/components/about-us/BannerImage";
import TitleSection from "@/components/about-us/TitleSection";
import { OurMission } from "@/modules/about-us/OurMission";

const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <TitleSection />
        </div>
        <BannerImage />
      </section>
      <OurMission />
    </>
  );
};

export default AboutUs;
