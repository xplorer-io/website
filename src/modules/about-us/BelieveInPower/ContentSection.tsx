import React from "react";
import { QuoteIcon } from "@radix-ui/react-icons";

const ContentSection = () => {
  return (
    <div className="flex flex-row space-x-5 p-8 md:py-12 lg:px-0 lg:py-24">
      <div>
        <QuoteIcon
          style={{ transform: "rotate(180deg)" }}
          className="size-6 text-gray-400 md:size-10"
        />
        <div className="ml-4 text-gray-800 md:ml-8">
          <span className="font-regular text-[24px] leading-tight md:text-[46px]">
            At Xplorers,
          </span>
          <p className="text-[16px] leading-tight md:text-[36px]">
            we believe in the power of
          </p>
        </div>
      </div>
      <div className="flex flex-col text-[24px] font-bold leading-7 md:pt-12 md:text-[42px] md:leading-10">
        <p className="pt-2 text-primary-500 opacity-10">collaboration</p>
        <p className="text-primary">connection.</p>
        <p className="leading-6 text-primary-500 opacity-10 md:leading-tight">
          shared learning
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
