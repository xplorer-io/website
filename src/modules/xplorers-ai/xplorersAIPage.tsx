import XplorersAIHero from "./xplorersAIHero";
import XplorersAIBody from "./xplorersAIBody";
import PagesWrapper from "@/components/layout/PagesWrapper";
import Image from "next/image";

const XplorersAIPage = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/dumkkicev/image/upload/v1732681551/xplorers-ai/yo0qwmjllhczcf4ywpri.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 flex-grow">
        <PagesWrapper>
          <XplorersAIHero />
          <XplorersAIBody />
        </PagesWrapper>
      </div>
    </div>
  );
};
export default XplorersAIPage;
