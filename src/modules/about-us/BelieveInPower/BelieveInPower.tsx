import React from "react";
import ContentSection from "./ContentSection";
import ImageBackground from "./ImageBackground";

const BelieveInPower = () => {
  return (
    <div className="container relative mx-auto">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <ContentSection />
        <ImageBackground />
      </div>
    </div>
  );
};

export default BelieveInPower;
