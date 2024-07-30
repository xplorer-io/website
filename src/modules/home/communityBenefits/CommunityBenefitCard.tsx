import Image from "next/image";
import { CommunityBenefitCardProps } from "./helper";

export const CommunityBenefitCard = ({
  name,
  imageUrl,
}: CommunityBenefitCardProps) => {
  return (
    <div key={name} className="flex flex-col items-center rounded-xl">
      <div className="flex h-96 w-80 flex-col items-center gap-4 rounded-md border-2 bg-blue-100 p-8 font-semibold text-black shadow-xl md:h-72 md:w-64 lg:h-[305px] lg:w-[256px]">
        <div className="flex h-64 w-64 justify-center">
          <Image src={imageUrl} width={125} height={100} alt={name} />
        </div>
        <div className="mt-4 text-center">{name}</div>
      </div>
    </div>
  );
};
