import TitleSection from "@/modules/about-us/HeroSection/TitleSection";
import BannerImage from "@/modules/about-us/HeroSection/BannerImage";
import React from "react";

const HeroSection = () => {
    return (
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <TitleSection/>
            </div>
            <BannerImage/>
        </section>
    );
};

export default HeroSection;
