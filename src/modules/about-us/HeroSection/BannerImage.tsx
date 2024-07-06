import React from "react";
import Image from 'next/image';
import aboutusbanner from "@/assets/about-us/about-us-banner.jpg";

const BannerImage = () => {
    return (
        <div className="relative h-80 sm:h-[calc(100% - 2rem)] md:h-[calc(100% - 4rem)]">
            <Image
                src={aboutusbanner}
                alt="Picture of the group"
                layout="fill"
                objectFit="cover"
                className="rounded-ss-[30px] sm:rounded-ss-[30px] md:rounded-ss-[60px]"
            />
        </div>
    );
};

export default BannerImage;
