import Image from "next/image";

type CommunityBenefitsCardProps = {
  name: string;
  imageurl: string;
};
export const CommunityBenefitCard = ({
  name,
  imageurl,
}: CommunityBenefitsCardProps) => {
  return (
    <div key={name} className="flex flex-col rounded-xl">
      <div className="flex flex-col items-center gap-4 rounded-md border-2 bg-blue-100 p-8 font-semibold text-black shadow-xl lg:h-[305px] lg:w-[256px]">
        <div className="flex h-64 w-64 justify-center">
          <Image src={imageurl} width={125} height={100} alt={name} />
        </div>
        <div className="mt-4 text-center">{name}</div>
      </div>
    </div>
  );
};
