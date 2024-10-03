import React from "react";
import { HeroSection, CareerSuccessGuide } from "@/modules/pathway-to-success";
import CVTemplate from "@/components/ui/CVTemplate";
import CVTitleTemplate from "@/components/ui/CVTitleTemplate";
CVTitleTemplate;

const PathwayToSuccess = () => {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <CVTitleTemplate
          initialTitle="HOW TO MAKE YOUR CV LOOK"
          highlightTitle="IMPRESSIVE"
        />
        <CVTemplate
          description="By Following this tips, you'll create a CV that not only  captures attention but also effectively showcase you strength. Invest time in perfecting your CV-it's a key step in landing your dream job. Good Luck! "
          initialTitle="Craft a"
          highlightTitle="Summary"
          number="2"
        />
        <CVTemplate
          description="By Following this tips, you'll create a CV that not only  captures attention but also effectively showcase you strength. Invest time in perfecting your CV-it's a key step in landing your dream job. Good Luck! "
          initialTitle="Showcase"
          highlightTitle="Achivements"
          number="2"
        />
        <CVTemplate
          description="By Following this tips, you'll create a CV that not only  captures attention but also effectively showcase you strength. Invest time in perfecting your CV-it's a key step in landing your dream job. Good Luck! "
          initialTitle="Craft a"
          highlightTitle="Summary"
          number="2"
        />
        <CVTemplate
          description="By Following this tips, you'll create a CV that not only  captures attention but also effectively showcase you strength. Invest time in perfecting your CV-it's a key step in landing your dream job. Good Luck! "
          initialTitle="Craft a"
          highlightTitle="Summary"
          number="2"
          smileEmojiDisplay
        />
      </div>
      <HeroSection />
      <CareerSuccessGuide />
    </div>
  );
};

export default PathwayToSuccess;
