import Image from "next/image";
import { CommunityBenefitCardProps } from "./helper";

export const CommunityBenefitCard = ({
  name,
  imageUrl,
}: CommunityBenefitCardProps) => {
  return (
    <div
      key={name}
      className="flex flex-col items-center rounded-xl border-2 bg-blue-100 p-8 shadow-xl"
    >
      <div className="flex flex-col items-center gap-4 font-semibold">
        <div className="aspect-w-1 aspect-h-1 relative flex h-28 w-28 justify-center md:h-[10rem] md:w-[10rem]">
          <Image src={imageUrl} fill alt={name} className="object-contain" />
        </div>
        <div className="mt-2 text-center text-lg">{name}</div>
      </div>
    </div>
  );
};
