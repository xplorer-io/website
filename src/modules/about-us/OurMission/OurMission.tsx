"use client";
import { CldImage } from "next-cloudinary";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const OurMission = () => {
  return (
    <section className="my-8">
      <div className="relative mx-auto mb-14 flex h-20 w-80 items-center justify-center">
        <CldImage
          src="left_half_box_dbs8em"
          alt="left half box"
          width={40}
          height={40}
          className="absolute bottom-0 left-0"
          format="svg"
          loading="lazy"
        />
        <h2 className="text-center font-bold text-gray-600">Our Mission</h2>
        <CldImage
          src="right_half_box_plopi5"
          alt="right half box"
          width={40}
          height={40}
          className="absolute right-0 top-0"
          format="svg"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-10">
        <RightSide
          title="Learn Share and Grow"
          description="We foster growth through continuous learning and knowledge sharing."
          imageSrc="share_zjrfuz"
        />
        <LeftSide
          title="Networking Hub"
          description="We provide space for like-minded individuals building the diverse networks within our community."
          imageSrc="networking_b5fvzy"
        />
        <RightSide
          title="Holistic Growth"
          description="To foster personal development beyond technical skills, encompassing areas such as fitness, trading, and music, among others."
          imageSrc="helping_ooxeir"
        />
        <LeftSide
          title="Community Engagement"
          description="Giving back to the broader community through collaboration, mentorship, and support."
          imageSrc="group_qppyol"
        />
        <RightSide
          title="Impactful Connection"
          description="To make a meaningful impact on each other's lives, both professionally and presonally."
          imageSrc="networking_b5fvzy"
        />
      </div>
    </section>
  );
};

export default OurMission;
