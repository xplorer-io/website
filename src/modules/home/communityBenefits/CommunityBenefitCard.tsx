import Image from "next/image";
import { CommunityBenefitCardProps } from "./helper";

export const CommunityBenefitCard = ({
  name,
  imageUrl,
}: CommunityBenefitCardProps) => {
  return (
    <div key={name} className="flex flex-col items-center rounded-xl bg-blue-100 shadow-xl border-2 p-8">
      <div className="flex flex-col items-center gap-4 font-semibold">
        <div className="flex h-48 w-48 aspect-w-1 aspect-h-1 justify-center relative">
          <Image src={imageUrl} fill alt={name} className="object-contain"/>
        </div>
        <div className="mt-2 text-center text-lg">{name}</div>
      </div>
    </div>
  );
};
