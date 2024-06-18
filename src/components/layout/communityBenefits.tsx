"use client";

import { Card, CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { communityBenefitsList } from "./helper";
import clsx from "clsx";
export const CommunityBenefits = () => {
    const pathname = usePathname();

    return(
      <>
      <h3 className="mx-48 ">Our Community Benefits</h3>
        <section className="flex mx-auto mx-16 justify-evenly items-center mx-24">
          {communityBenefitsList.map(({ name, imageurl }) => (
            <div
              key={name}
              className="flex flex-col m-4 rounded-xl  "
            >  
              <CardContent className="flex flex-col items-center bg-blue-100 py-8 text-black gap-2  w-48 h-64 rounded-md shadow-2xl border-2 font-semibold">              
                <div className="flex w-48 h-32 justify-center ">
                  <Image src={imageurl} className="" width={100} height={100} alt="community"/>
                </div>
                <CardContent className="text-center">{name}</CardContent>
              </CardContent>
            </div>
          ))}
        </section>
        </>
    )
   
}

