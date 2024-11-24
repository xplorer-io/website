import React from "react";
import Image from "next/image";

const ImageBackground = () => (
  <div className="flex items-center">
    <Image
      src="/illustrations/Believe-in-power.svg"
      width="250"
      height="100"
      alt="Believe in power"
      className="absolute right-0 opacity-10"
    />
  </div>
);

export default ImageBackground;
