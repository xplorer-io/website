import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { careerData } from "@/data/careerSuccessData";
import Image from "next/image";
import ButtonLink from "@/components/ui/buttons/ButtonLink";
import { PathwayToSuccessRoutes } from "@/constants/routes";

type SuccessCardProps = careerData;

const CareerSuccessCard = ({
  image,
  title,
  bulletPoints,
  url,
}: SuccessCardProps) => {
  return (
    <>
      <Card className="relative flex flex-col border-gray-500">
        <div className="flex items-center justify-center">
          <figure className="relative h-[20rem] w-[10rem] lg:h-48 lg:w-48">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </figure>
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription className="flex-grow p-5 text-lg">
          {bulletPoints.map((point, index) => (
            <span key={index} className="block">
              <span>&#x2022;</span> {point}
            </span>
          ))}
        </CardDescription>
        <CardFooter className="mt-auto flex justify-center">
          <ButtonLink href={`${PathwayToSuccessRoutes.base}${url}`}>
            Learn More
          </ButtonLink>
        </CardFooter>
      </Card>
    </>
  );
};

export default CareerSuccessCard;
