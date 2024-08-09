import React from "react";
import Image from "next/image";

const ImageBackground = () => (
  <div className="flex items-center">
    <Image
      src={"/images/illustrations/Believe-in-power.svg"}
      width="250"
      height="100"
      alt="Believe in power"
      className="hidden opacity-10 md:block"
    />
  </div>
);

export default ImageBackground;
