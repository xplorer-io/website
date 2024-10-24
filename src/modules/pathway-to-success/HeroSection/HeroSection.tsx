"use client";
import React from "react";
import ButtonLink from "@/components/ui/buttons/ButtonLink";
import { CldImage } from "next-cloudinary";

const HeroSection = () => {
  return (
    <section className="relative flex h-[60vh] items-center justify-center">
      {/* Cloudinary image acting as the background */}
      <CldImage
        className="absolute inset-0 z-0 object-cover"
        src="https://res.cloudinary.com/dumkkicev/image/upload/v1729572873/Golden_Hour_Shore_Jump_qhm1nk.jpg"
        fill
        alt="Pathway to success"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white">
        <h2 className="text-4xl font-bold">Pathway to Success</h2>
        <p className="mx-auto my-4 max-w-2xl text-lg">
          Our comprehensive guide to launching your career covers everything you
          need to stand out in today&apos;s competitive job market.
        </p>
        <ButtonLink href="#">Learn More</ButtonLink>
      </div>
    </section>
  );
};
export default HeroSection;
