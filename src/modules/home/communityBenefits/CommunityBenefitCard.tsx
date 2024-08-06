import Image from "next/image";
import { CommunityBenefitCardProps } from "./helper";

export const CommunityBenefitCard = ({
  name,
  imageUrl,
}: CommunityBenefitCardProps) => {
  return (
    <div key={name} className="flex w-full flex-col items-center rounded-xl">
      <div className="flex h-96 w-80 flex-col items-center gap-4 rounded-md border-2 bg-blue-100 p-8 text-black transition-all duration-500 hover:shadow-xl md:h-72 md:w-64 lg:h-[305px] lg:w-full">
        <div className="flex h-64 w-64 justify-center">
          <Image
            src={imageUrl}
            width={140}
            height={110}
            alt={name}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-4 text-center text-xl">{name}</div>
      </div>
    </div>
  );
};
