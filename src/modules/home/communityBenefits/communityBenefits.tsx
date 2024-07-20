"use client";
import Image from "next/image";
import { Button } from "@/components/ui/buttons/button";
import arrow from "@public/images/icons/arrow.svg";
import { communityBenefitsList } from "./helper";
import { CommunityBenefitCard } from "./CommunityBenefitCard";

export const CommunityBenefits = () => {
  return (
    <section className="md:flex-col-2 flex flex-col justify-center gap-16 lg:mx-6">
      <h1 className="text-left text-2xl font-bold">Our Community Benefits</h1>
      <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-16 lg:grid-cols-4 lg:gap-24">
        {communityBenefitsList.map(({ name, imageurl }) => (
          <CommunityBenefitCard key={name} name={name} imageurl={imageurl} />
        ))}
      </section>
      <Button className="mt-8 flex items-center gap-2 self-center">
        <span>Learn More</span>
        <Image src={arrow} height={1} width={36} alt="arrow" />
      </Button>
    </section>
  );
};
