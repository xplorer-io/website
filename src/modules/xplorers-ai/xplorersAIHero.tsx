import Image from "next/image";
import { XPLORERS_AI_LOGO } from "@/constants";

const XplorersAIHero = () => {
  return (
    <div className="grid grid-cols-2">
      <Image
        src={XPLORERS_AI_LOGO}
        alt="Xplorers AI Logo"
        width={160}
        height={160}
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Welcome to Xplorer&apos;s Hub
        </h2>
        <p className="text-gray-500 md:mt-4">
          Discover the power of GPT-4 with Xplore! Here, you&apos;ll find tools
          for content creation, customer interaction, data analysis, and more.
          Dive in to see how Xplore&apos;s AI can transform your work and spark
          innovation
        </p>
      </div>
    </div>
  );
};
export default XplorersAIHero;
