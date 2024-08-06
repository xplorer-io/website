"use client";
import Image from "next/image";
import { Button } from "@/components/ui/buttons/button";
import arrow from "@public/images/icons/arrow.svg";
import { communityBenefitsList } from "./helper";
import { CommunityBenefitCard } from "./CommunityBenefitCard";
import Link from "next/link";

export const CommunityBenefits = () => {
  return (
    <section className="md:flex-col-2 container mx-auto my-10 flex flex-col justify-center gap-10">
      <h1 className="text-center text-2xl font-semibold lg:text-left">
        Our Community Benefits
      </h1>
      <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:grid-cols-4 lg:gap-24">
        {communityBenefitsList.map(({ name, imageUrl }) => (
          <CommunityBenefitCard key={name} name={name} imageUrl={imageUrl} />
        ))}
      </section>
      <Link href="/about-us">
        <Button className="mx-auto mt-8 flex items-center gap-4 bg-primary-400 text-base hover:bg-primary md:text-xl dark:bg-primary-400 dark:text-white dark:hover:bg-primary">
          <span>Learn More</span>
          <Image src={arrow} height={1} width={36} alt="arrow" />
        </Button>
      </Link>
    </section>
  );
};
