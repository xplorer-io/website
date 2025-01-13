import XplorersAIHero from "./xplorersAIHero";
import XplorersAIBody from "./xplorersAIBody";
import PagesWrapper from "@/components/layout/PagesWrapper";
import Image from "next/image";
import { xplorersAiBackground } from "@/constants/links";
import XplorersAIContextProvider from "@/components/shared/XplorersAIContextProvider";

const XplorersAIPage = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src={xplorersAiBackground}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 flex-grow">
        <PagesWrapper>
          <XplorersAIContextProvider>
            <XplorersAIHero />
            <XplorersAIBody />
          </XplorersAIContextProvider>
        </PagesWrapper>
      </div>
    </div>
  );
};
export default XplorersAIPage;
