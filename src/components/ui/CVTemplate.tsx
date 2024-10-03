import React from "react";
import Image from "next/image";

interface CVSectionProps {
  number: string;
  initialTitle: string;
  highlightTitle: string;
  description: string;
  smileEmojiDisplay?: boolean;
}

const CVTemplate: React.FC<CVSectionProps> = ({
  number,
  initialTitle,
  highlightTitle,
  description,
  smileEmojiDisplay,
}) => {
  return (
    <div className="m-1 flex min-h-[650px] w-[32%] flex-col items-center justify-center bg-cv-template-background text-white">
      <div className="p-12">
        <div className="flex h-[53px] w-[50px] items-center justify-center rounded-full bg-custom-yellow p-2 font-extrabold text-black">
          {number}.
        </div>
        <div className="flex w-2/3">
          <div className="whitespace-nowrap text-5xl">{initialTitle}</div>
          <div className="text-5xl">
            {smileEmojiDisplay ? (
              <Image
                src="/icons/smile-emoji.svg"
                alt="See more"
                width={45}
                height={45}
                className="mt-2 cursor-pointer rounded-full transition-all hover:scale-105"
              />
            ) : (
              <Image
                src="/icons/right_pointing_arrow.svg"
                alt="See more"
                width={45}
                height={45}
                className="mt-2 cursor-pointer rounded-full transition-all hover:scale-105"
              />
            )}
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

export default CVTemplate;
