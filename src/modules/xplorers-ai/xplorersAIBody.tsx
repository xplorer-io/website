"use client";

import XplorersAISearch from "./xplorersAISearch";
import XplorersAIChatBox from "./xplorersAIChatBox";
import { useXplorersAIContext } from "@/context/XplorersAIContext";

const XplorersAIBody = () => {
  const { messages } = useXplorersAIContext();

  return (
    <div className="pt-8">
      <h2 className="typing-text py-8">
        Hey there! I&apos;m Xplorers AI—how can I help you today?
      </h2>
      <div className="min-h-[45vh] overflow-auto">
        {messages.length > 1 && <XplorersAIChatBox messages={messages} />}
        <XplorersAISearch />
      </div>
    </div>
  );
};
export default XplorersAIBody;
