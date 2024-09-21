import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../../../components/ui/card";
import { CareerData } from "@/data/careerSuccessData";
import Image from "next/image";
import ButtonLink from "@/components/ui/buttons/ButtonLink";

type SuccessCardProps = CareerData;

const CareerSuccessCard = ({
  id,
  image,
  title,
  bulletPoints,
}: SuccessCardProps) => {
  return (
    <>
      <Card className="relative flex flex-col border-gray-500">
        <div className="flex items-center justify-center">
          <figure className="relative h-[20rem] w-[10rem] lg:h-48 lg:w-48">
            <Image
              src={image}
              fill
              alt={title}
              style={{ objectFit: "contain" }}
            />
          </figure>
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription className="flex-grow p-5 text-lg">
          {bulletPoints.map((point) => (
            <p>
              <span>&#x2022;</span> {point}
            </p>
          ))}
        </CardDescription>
        <CardFooter className="mt-auto flex justify-center">
          <ButtonLink href="#">Learn More</ButtonLink>
        </CardFooter>
      </Card>
    </>
  );
};

export default CareerSuccessCard;
