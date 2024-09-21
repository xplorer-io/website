import React from "react";
import ButtonLink from "@/components/ui/buttons/ButtonLink";

const HeroSection = () => {
  return (
    <section
      className="relative flex h-[60vh] items-center justify-center bg-center"
      style={{
        backgroundImage: `url('/images/pathway-to-success/pathway-to-success-banner.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white">
        <h2 className="font-bold">Pathway to Success</h2>
        <p className="text-md mx-auto my-4">
          Our comprehensive guide to launching your career covers everything you
          need to stand out in today's competitive job market.
        </p>
        <ButtonLink href="#">Learn More</ButtonLink>
      </div>
    </section>
  );
};

export default HeroSection;
