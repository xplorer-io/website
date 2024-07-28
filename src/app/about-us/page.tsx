import React from "react";
import { OurMission } from "@/modules/about-us/OurMission";
import { HeroSection } from "@/modules/about-us/HeroSection";
import { BelieveInPower } from "@/modules/about-us/BelieveInPower";

const AboutUs = () => {
  return (
    <>
      <HeroSection />
      <BelieveInPower/>
      <OurMission />
    </>
  );
};

export default AboutUs;
