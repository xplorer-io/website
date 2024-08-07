"use client";
import Image from "next/image";
import logo from "@public/images/logos/xplorer_logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Divider = () => {
  return (
    <span
      aria-hidden="true"
      className="block h-2 w-2 shrink-0 rounded-full bg-slate-800"
    ></span>
  );
};

const Banner = () => {
  return (
    <>
      <Image src={logo} alt="logo" className="w-24" />
      <Divider />
      <p>Learn</p>
      <Divider />
      <p>Share</p>
      <Divider />
      <p>Grow</p>
      <Divider />
    </>
  );
};

const MarqueeContent = ({ ariaHidden }: { ariaHidden?: boolean }) => {
  return (
    <div
      className="marquee flex w-full shrink-0 items-center gap-0 text-xl"
      aria-hidden={ariaHidden}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="hero-slider h-full"
        autoplay={{ delay: 5000 }}
      >
        <div className="flex items-center gap-4 whitespace-nowrap">
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </div>
      </Swiper>
    </div>
  );
};

const MarqueeBanner = () => {
  return (
    <div className="flex h-[50px] items-center gap-6 overflow-hidden bg-primary-50/15">
      <MarqueeContent />
      <MarqueeContent ariaHidden />
    </div>
  );
};
export default MarqueeBanner;
