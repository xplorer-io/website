import React from "react";

type TitleHeaderProps = {
  title: string;
  description: string;
};

const TitleHeader = ({ title, description }: TitleHeaderProps) => {
  return (
    <div className="mx-auto py-8 sm:py-12">
      <div className="gap-10 sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h1>
          <p className="text-md mt-2.5 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
