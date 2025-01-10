import React from "react";
import CareerSuccessCard from "./Card/CareerSuccessCard";
import { careerSuccessData } from "@/data/careerSuccessData";

const CareerSuccessGuide = () => {
  return (
    <section className="container mx-auto">
      <h2 className="my-8 text-center">Your Career Success Guide</h2>
      <div className="mx-4 my-4 grid grid-cols-1 gap-4 sm:mx-0 md:grid-cols-3">
        {careerSuccessData.map((data) => (
          <CareerSuccessCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};

export default CareerSuccessGuide;
