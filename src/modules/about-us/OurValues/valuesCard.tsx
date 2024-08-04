import Image from "next/image";
import { OurValuesListProps } from "./helper";

export const OurValuesCard = ({
  name,
  imageUrl,
  description,
}: OurValuesListProps) => {
  return (
    <div className="flex flex-col items-center p-2 font-bold">
      <figure className="flex justify-center lg:h-64 lg:w-64">
        <Image src={imageUrl} width={250} height={120} alt={name} />
      </figure>
      <span className="mt-4 text-center text-2xl">{name}</span>
      <span className="mt-4 text-center text-sm sm:mx-24 lg:mx-10">
        {description}
      </span>
    </div>
  );
};
