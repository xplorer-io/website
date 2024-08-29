"use client";
import Image from "next/image";
import { Button } from "@/components/ui/buttons/button";
import arrow from "@public/images/icons/arrow.svg";
import { communityBenefitsList } from "./helper";
import { CommunityBenefitCard } from "./CommunityBenefitCard";
import ButtonLink from "@/components/ui/buttons/ButtonLink";

export const CommunityBenefits = () => {
  return (
    <section className="container mx-auto">
      <section className="md:flex-col-2 flex flex-col justify-center gap-10 lg:mt-8 lg:gap-12">
        <h1 className="text-center text-2xl font-bold lg:text-left">
          Our Community Benefits
        </h1>
        <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:grid-cols-4">
          {communityBenefitsList.map(({ name, imageUrl }) => (
            <CommunityBenefitCard key={name} name={name} imageUrl={imageUrl} />
          ))}
        </section>
        <div className="mx-auto mt-4 md:my-8">
          <ButtonLink href="#">Learn More</ButtonLink>
        </div>
      </section>
    </section>
  );
};
