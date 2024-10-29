"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const ImageBackground = () => (
  <div className="flex items-center">
    <CldImage
      src="Believe-in-power_f2pe6h"
      width="250"
      height="100"
      alt="Believe in power"
      className="absolute right-0 opacity-10"
      format="svg"
    />
  </div>
);

export default ImageBackground;
