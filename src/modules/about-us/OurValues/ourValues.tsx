"use client";
import Image from "next/image";
import { ourValuesList } from "./valuesHelper";

type ourValuesProps = {
  name: string;
  description: string;
  imageurl: string;
};

const OurValues = () => {
  return (
    <>
      <section className="flex flex-col justify-center gap-16 md:flex-col lg:mx-48">
        <h2 className="text-center font-bold text-gray-600">Our Values</h2>
        <section className="grid grid-cols-1 justify-between sm:gap-16 lg:grid-cols-3 lg:gap-12">
          {ourValuesList.map(
            ({ name, description, imageurl }: ourValuesProps) => (
              <div key={name} className="flex flex-col justify-center">
                <div className="flex flex-col items-center p-2 font-bold">
                  <div className="flex justify-center lg:h-64 lg:w-64">
                    <Image src={imageurl} width={250} height={120} alt={name} />
                  </div>
                  <span className="mt-4 text-center text-2xl">{name}</span>
                  <span className="mt-4 text-center text-sm sm:mx-24 lg:mx-10">
                    {description}
                  </span>
                </div>
              </div>
            ),
          )}
        </section>
      </section>
    </>
  );
};
export default OurValues;
