import React from "react";
import { OurMission } from "@/modules/about-us/OurMission";
import { OurValues } from "@/modules/about-us/OurValues";
import { HeroSection } from "@/modules/about-us/HeroSection";
import { BelieveInPower } from "@/modules/about-us/BelieveInPower";

const AboutUs = () => {
  return (
    <>
      <HeroSection />
      <BelieveInPower/>
      <OurMission />
      <OurValues />
    </>
  );
};

export default AboutUs;
