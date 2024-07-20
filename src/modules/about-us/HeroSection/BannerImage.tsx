import React from "react";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="sm:h-[calc(100% - 2rem)] md:h-[calc(100% - 4rem)] relative h-80">
      <Image
        src={"/images/hero-image.jpg"}
        alt="Picture of the group"
        layout="fill"
        objectFit="cover"
        className="rounded-ss-[30px] sm:rounded-ss-[30px] md:rounded-ss-[60px]"
      />
    </div>
  );
};

export default BannerImage;
