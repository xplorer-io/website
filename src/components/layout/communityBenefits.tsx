"use client";

import { Card, CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import arrow from "../../../public/assets/images/communityBenefits/Arrow.svg" 

import { communityBenefitsList } from "./helper";




export const CommunityBenefits = () => {
    const pathname = usePathname();

    return(
      <>
      
      <section className="flex lg:mx-64 md:flex-col gap-16 justify-center flex-col ">
        <h2>Our Community Benefits</h2>
        <section className="flex flex-col gap-2 lg:flex-row justify-between ">
          {communityBenefitsList.map(({ name, imageurl }) => (
            <div
              key={name}
              className="flex flex-col rounded-xl"
              >  
              <CardContent className="flex flex-col items-center bg-blue-100 py-8 text-black gap-16 w-[256px] h-[305px] rounded-md customshadow-gray-200 border-2 font-semibold">              
                <div className="flex w-64 h-64 justify-center ">
                  <Image src={imageurl} className="" width={125} height={100} alt="community"/>
                </div>
                <CardContent className="text-center">{name}</CardContent>
              </CardContent>
            </div>
          ))}
        </section>
        <Button className="self-center"><p>Learn More &#160;</p> {<Image src={arrow} height={1} width={36} alt={"&#8594;"}/>}</Button>
      </section>
      </>
    )
   
}

