"use client";

import Image from "next/image";
type RightSideProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const RightSide = ({ title, description, imageSrc }: RightSideProps) => (
  <div className="relative flex flex-col justify-end gap-2 lg:flex-row lg:gap-4">
    <div className="flex justify-center">
      <Image
        src={imageSrc}
        alt="community engagement"
        className="h-36 content-center lg:h-48"
        loading="lazy"
      />
    </div>
    <div className="relative h-32 overflow-hidden lg:w-3/5">
      <div className="absolute -right-8 h-full w-full skew-x-[20deg] bg-primary-600"></div>
      <div className="relative h-full px-8">
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          <h4 className="text-md leading-tight text-white">{title}</h4>
          <p className="text-sm leading-tight text-stone-300 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RightSide;
