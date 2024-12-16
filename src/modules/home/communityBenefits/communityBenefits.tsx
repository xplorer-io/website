"use client";
import { communityBenefitsList } from "./helper";
import { CommunityBenefitCard } from "./CommunityBenefitCard";
import ButtonLink from "@/components/ui/buttons/ButtonLink";

export const CommunityBenefits = () => {
  return (
    <section className="container mx-auto">
      <div className="md:flex-col-2 mx-4 flex flex-col justify-center gap-10 sm:mx-0 lg:mt-8 lg:gap-12">
        <h1 className="text-center text-2xl font-bold lg:text-left">
          Our Community Benefits
        </h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:grid-cols-4">
          {communityBenefitsList.map(({ name, imageUrl }) => (
            <CommunityBenefitCard key={name} name={name} imageUrl={imageUrl} />
          ))}
        </div>
        <div className="mx-auto my-8 mt-4">
          <ButtonLink href="#">Learn More</ButtonLink>
        </div>
      </div>
    </section>
  );
};
