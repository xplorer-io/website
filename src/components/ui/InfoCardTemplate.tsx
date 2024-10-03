import React from "react";
import ImagePass from "./ImagePass";

interface CVSectionProps {
  number: string;
  initialTitle: string;
  highlightTitle: string;
  description: string;
  passingImage: boolean;
  src?: string;
  alt?: string;
  link: string;
}

const InfoCardTemplate: React.FC<CVSectionProps> = ({
  number,
  initialTitle,
  highlightTitle,
  description,
  passingImage,
  src,
  alt,
  link,
}) => {
  return (
    <div className="flex min-h-[80vh] w-[80%] flex-col items-center justify-center bg-cv-template-background text-white sm:w-[45%] lg:w-[33%] xl:w-[33%]">
      <div className="p-12">
        <div className="flex h-[53px] w-[50px] items-center justify-center rounded-full bg-custom-yellow p-2 font-extrabold text-black">
          {number}.
        </div>
        <div className="flex w-2/3 justify-between">
          <div className="flex-1 text-5xl">{initialTitle}</div>
          <div className="ml-4 min-w-[45px] flex-shrink-0 text-5xl">
            <ImagePass
              display={passingImage}
              alt={alt || "imageDesc"}
              src={src || "/icons/right_pointing_arrow.svg"}
              link={link || "#"}
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
