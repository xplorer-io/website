"use client";

import XplorersAISearch from "./xplorersAISearch";
import XplorersAIChatBox from "./xplorersAIChatBox";
import { ChangeEvent } from "react";
import { FileUploadEvent } from "@/interface";
import { useXplorersAIContext } from "@/context/XplorersAIContext";

const XplorersAIBody = () => {
  const { getMessages } = useXplorersAIContext();
  const messages = getMessages();
  return (
    <div className="pt-8">
      <h2 className="typing-text py-8">
        Hey there! I&apos;m Xplorers AI—how can I help you today?
      </h2>
      <div className="min-h-[70vh] overflow-auto">
        {messages.length > 1 && <XplorersAIChatBox messages={messages} />}
        <XplorersAISearch />
      </div>
    </div>
  );
};
export default XplorersAIBody;
