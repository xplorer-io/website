import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const heroImages = [
  {
    id: 1,
    imageSrc: "homepage/aayttz2ixe1qrx9cjpaa",
    imageAlt: "group image 1",
  },
  {
    id: 2,
    imageSrc: "Collected_Images_2984_nguvyu",
    imageAlt: "group image 2",
  },
  {
    id: 3,
    imageSrc: "Collected_Images_2724_xk1mvr",
    imageAlt: "group image 3",
  },
  {
    id: 4,
    imageSrc: "Collected_Images_6661_m5sfph",
    imageAlt: "group image 4",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative h-[65vh] md:h-[calc(100vh-146px)]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="hero-slider h-full"
        autoplay={{ delay: 5000 }}
      >
        {heroImages.map((heroImage) => (
          <SwiperSlide key={heroImage.id}>
            <Image
              src={heroImage.imageSrc}
              alt={heroImage.imageAlt}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Hero section bottom overlay */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-[150%] translate-x-[-22%] skew-x-[50deg] items-end sm:translate-x-[-15%]">
          <div className="h-44 w-[60%] bg-primary/60 sm:w-[50%]"></div>
          <div className="h-32 w-[50%] bg-secondary/60"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default HeroSlider;
