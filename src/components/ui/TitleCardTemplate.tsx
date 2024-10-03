import React from "react";
import Image from "next/image";

interface CVTitleTemplateProps {
  initialTitle: string;
  highlightTitle: string;
}

const TitleCardTemplate: React.FC<CVTitleTemplateProps> = ({
  initialTitle,
  highlightTitle,
}) => {
  return (
    <div className="flex min-h-[80vh] w-[95%] flex-col items-center justify-center bg-[#345c73] text-white sm:w-[45%] lg:min-h-[650px] lg:w-[32%] xl:w-[24%]">
      <div className="flex w-10/12 flex-col p-2 sm:w-10/12 md:w-2/3 lg:w-10/12">
        <div className="text-6xl sm:text-4xl lg:text-5xl xl:text-5xl">
          {initialTitle}
        </div>
        <div className="text-5xl font-bold text-custom-yellow sm:text-4xl lg:text-5xl">
          {highlightTitle}
        </div>
        <Image
          src="/icons/title-bottom-border.svg"
          alt="bottom-border"
          height={100}
          width={100}
          className="mt-2 w-2/3 sm:w-2/3 lg:w-2/3"
        />
      </div>
    </div>
  );
};

export default TitleCardTemplate;
