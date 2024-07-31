import React from "react";
import { OurMission } from "@/modules/about-us/OurMission";
import { OurValues } from "@/modules/about-us/OurValues";
import { HeroSection } from "@/modules/about-us/HeroSection";

const AboutUs = () => {
  return (
    <>
      <HeroSection />
      <OurMission />
      <OurValues />
    </>
  );
};

export default AboutUs;
