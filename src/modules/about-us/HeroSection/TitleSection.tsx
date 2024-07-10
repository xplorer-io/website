import React from "react";
import ButtonLink from "@/components/ui/buttons/ButtonLink";

const TitleSection = () => {
  return (
    <div className="mx-auto max-w-xl ltr:text-left rtl:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Who are Xplorers?
      </h2>
      <p className="text-gray-500 md:mt-4">
        Xplorers is a group of dedicated tech professionals and up-coming tech
        talents. We are united by our dedication to fostering growth and
        innovation throughout the tech community.
      </p>
      <p className="text-gray-500 md:mt-4">
        From <strong>Fitness</strong> to <strong>Finance</strong>, from{" "}
        <strong>Knowledge Sharing</strong> to <strong>Musical Pursuits</strong>,
        we believe in embracing every opportunity for development and
        enrichment. We provide a nurturing environment where like-minded
        individuals can build lasting connections and networks, guided by our
        motto:
      </p>
      <div className="mt-2 flex">
        <span className="block animate-pulse text-2xl font-semibold">
          <span
            style={{
              background: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Learn
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginLeft: "8px",
            }}
          >
            Share
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginLeft: "8px",
            }}
          >
            Grow
          </span>
        </span>
      </div>
      <div className="mt-4 md:mt-8">
        <ButtonLink href="#">Join Xplorers Today</ButtonLink>
      </div>
    </div>
  );
};

export default TitleSection;
