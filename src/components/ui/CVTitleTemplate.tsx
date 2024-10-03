import React from "react";
import Image from "next/image";

interface CVTitleTemplateProps {
  initialTitle: string;
  highlightTitle: string;
}

const CVTitleTemplate: React.FC<CVTitleTemplateProps> = ({
  initialTitle,
  highlightTitle,
}) => {
  return (
    <div className="flex min-h-[650px] w-[32%] flex-col items-center justify-center bg-cv-template-background text-white">
      <div className="w-2/3">
        <div className="text-5xl">{initialTitle}</div>
        <div className="mb-2 text-5xl font-bold text-custom-yellow">
          {highlightTitle}
        </div>
        <Image
          src="/icons/title-bottom-border.svg"
          alt="bottom-border"
          height={100}
          width={100}
          className="w-2/3"
        ></Image>
      </div>
    </div>
  );
};

export default CVTitleTemplate;
