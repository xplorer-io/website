"use client";
import { CldImage } from "next-cloudinary";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const OurMission = () => {
  return (
    <section className="my-8">
      <div className="relative mx-auto mb-14 flex h-20 w-80 items-center justify-center">
        <CldImage
          src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578490/left_half_box_dbs8em.svg"
          alt="left half box"
          width={40}
          height={40}
          className="absolute bottom-0 left-0"
          format="svg"
        />
        <h2 className="text-center font-bold text-gray-600">Our Mission</h2>
        <CldImage
          src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578495/right_half_box_plopi5.svg"
          alt="right half box"
          width={40}
          height={40}
          className="absolute right-0 top-0"
          format="svg"
        />
      </div>
      <div className="flex flex-col gap-10">
        <RightSide
          title="Learn Share and Grow"
          description="We foster growth through continuous learning and knowledge sharing."
          imageSrc="https://res.cloudinary.com/dumkkicev/image/upload/v1729578545/share_zjrfuz.svg"
        />
        <LeftSide
          title="Networking Hub"
          description="We provide space for like-minded individuals building the diverse networks within our community."
          imageSrc="https://res.cloudinary.com/dumkkicev/image/upload/v1729578534/networking_b5fvzy.svg"
        />
        <RightSide
          title="Holistic Growth"
          description="To foster personal development beyond technical skills, encompassing areas such as fitness, trading, and music, among others."
          imageSrc="https://res.cloudinary.com/dumkkicev/image/upload/v1729578527/helping_ooxeir.svg"
        />
        <LeftSide
          title="Community Engagement"
          description="Giving back to the broader community through collaboration, mentorship, and support."
          imageSrc="https://res.cloudinary.com/dumkkicev/image/upload/v1729578522/group_qppyol.svg"
        />
        <RightSide
          title="Impactful Connection"
          description="To make a meaningful impact on each other's lives, both professionally and presonally."
          imageSrc="https://res.cloudinary.com/dumkkicev/image/upload/v1729578534/networking_b5fvzy.svg"
        />
      </div>
    </section>
  );
};

export default OurMission;
