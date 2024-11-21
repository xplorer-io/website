"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import left_half_box from "@public/icons/left_half_box.svg";
import right_half_box from "@public/icons/right_half_box.svg";
import group from "@public/illustrations/group.svg";
import networking from "@public/illustrations/networking.svg";
import helping from "@public/illustrations/helping.svg";
import share from "@public/illustrations/share.svg";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const OurMission = () => {
  return (
    <section className="my-8">
      <div className="relative mx-auto mb-14 flex h-20 w-80 items-center justify-center">
        <Image
          src={left_half_box}
          alt="left half box"
          className="absolute bottom-0 left-0"
          loading="lazy"
        />
        <h2 className="text-center font-bold text-gray-600">Our Mission</h2>
        <Image
          src={right_half_box}
          alt="right half box"
          className="absolute right-0 top-0"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-10">
        <RightSide
          title="Learn Share and Grow"
          description="We foster growth through continuous learning and knowledge sharing."
          imageSrc={share}
        />
        <LeftSide
          title="Networking Hub"
          description="We provide space for like-minded individuals building the diverse networks within our community."
          imageSrc={networking}
        />
        <RightSide
          title="Holistic Growth"
          description="To foster personal development beyond technical skills, encompassing areas such as fitness, trading, and music, among others."
          imageSrc={helping}
        />
        <LeftSide
          title="Community Engagement"
          description="Giving back to the broader community through collaboration, mentorship, and support."
          imageSrc={group}
        />
        <RightSide
          title="Impactful Connection"
          description="To make a meaningful impact on each other's lives, both professionally and presonally."
          imageSrc={networking}
        />
      </div>
    </section>
  );
};

export default OurMission;
