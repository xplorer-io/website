import Image from "next/image";

const XplorersAIHero = () => {
  return (
    <div className="grid grid-cols-2">
      <Image
        src="https://res.cloudinary.com/dumkkicev/image/upload/v1733812951/xplorers-ai/koo5k69yxpmaxqg21v5m.png"
        alt="Xplorers AI Logo"
        width={160}
        height={160}
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Welcome to Xplorer's Hub
        </h2>
        <p className="text-gray-500 md:mt-4">
          Discover the power of GPT-4 with Xplore! Here, you’ll find tools for
          content creation, customer interaction, data analysis, and more. Dive
          in to see how Xplore’s AI can transform your work and spark innovation
        </p>
      </div>
    </div>
  );
};
export default XplorersAIHero;
