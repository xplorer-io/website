import XplorersAIHero from "./xplorersAIHero";
import XplorersAIBody from "./xplorersAIBody";
import PagesWrapper from "@/components/layout/PagesWrapper";
import Image from "next/image";
import { XPLORERS_AI_BACKGROUND } from "@/constants";

const XplorersAIPage = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src={XPLORERS_AI_BACKGROUND}
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
