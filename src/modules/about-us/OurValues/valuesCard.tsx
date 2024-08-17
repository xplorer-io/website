import Image from "next/image";
import { OurValuesListProps } from "./helper";

export const OurValuesCard = ({
  name,
  imageUrl,
  description,
}: OurValuesListProps) => {
  return (
    <div className="relative flex flex-col items-center p-2 font-bold">
      <figure className="relative flex justify-center h-[10rem] w-[10rem] lg:h-48 lg:w-48">
        <Image src={imageUrl} fill alt={name}/>
      </figure>
      <span className="mt-4 text-center text-2xl">{name}</span>
      <span className="mt-4 text-center font-medium text-xs mx-12 lg:mx-10">
        {description}
      </span>
    </div>
  );
};
