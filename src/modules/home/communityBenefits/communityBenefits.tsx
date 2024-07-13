"use client";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import arrow from "@public/images/icons/arrow.svg";
import {communityBenefitsList} from "./helper";

export const CommunityBenefits = () => {
  return (
    <>
      <section className="flex flex-col justify-center gap-16 md:flex-col lg:mx-64">
        <h1 className=" text-left text-2xl font-bold ">
          Our Community Benefits
        </h1>
        <section className="flex flex-col justify-between lg:gap-24 gap-12 lg:flex-row">
          {communityBenefitsList.map(({ name, imageurl }) => (
            <div key={name} className="flex flex-col rounded-xl">
              <div className="flex lg:h-[305px] lg:w-[256px] flex-col items-center gap-4 rounded-md border-2 bg-blue-100 p-8 font-semibold text-black shadow-xl">
                <div className="flex h-64 w-64 justify-center">
                  <Image src={imageurl} width={125} height={100} alt={name} />
                </div>
                <div className="mt-4 text-center">{name}</div>
              </div>
            </div>
          ))}
        </section>
        <Button className="mt-8 flex items-center gap-2 self-center">
          <span>Learn More</span>
          <Image src={arrow} height={1} width={36} alt="arrow" />
        </Button>
      </section>
    </>
  );
};
