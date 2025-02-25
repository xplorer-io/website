"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const BannerImage = () => {
  return (
    <div className="sm:h-[calc(100% - 2rem)] md:h-[calc(100% - 4rem)] relative h-80">
      <CldImage
        src="Collected_Images_2730_wcoakw"
        alt="Picture of the group"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-ss-[30px] sm:rounded-ss-[30px] md:rounded-ss-[60px]"
      />
    </div>
  );
};

export default BannerImage;
