import React from "react";
import ImagePass from "./ImagePass";

interface CVSectionProps {
  number: string;
  initialTitle: string;
  highlightTitle: string;
  description: string;
  passingImage: boolean;
}

const InfoCardTemplate: React.FC<CVSectionProps> = ({
  number,
  initialTitle,
  highlightTitle,
  description,
  passingImage,
}) => {
  return (
    <div className="flex min-h-[80vh] w-[80%] flex-col items-center justify-center bg-cv-template-background text-white sm:w-[45%] lg:w-[33%] xl:w-[33%]">
      <div className="p-12">
        <div className="flex h-[53px] w-[50px] items-center justify-center rounded-full bg-custom-yellow p-2 font-extrabold text-black">
          {number}.
        </div>
        <div className="flex w-2/3 justify-between">
          <div className="whitespace-nowrap text-5xl">{initialTitle}</div>
          <div className="text-5xl">
            <ImagePass
              display={passingImage}
              alt="right-arrow"
              src="./icons/right_pointing_arrow.svg"
            />
          </div>
        </div>
        <div className="text-5xl font-bold text-custom-yellow">
          {highlightTitle}
        </div>
        <div className="mt-5">{description}</div>
      </div>
    </div>
  );
};

export default InfoCardTemplate;
