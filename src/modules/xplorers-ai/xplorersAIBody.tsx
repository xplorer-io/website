"use client";

import XplorersAISearch from "./xplorersAISearch";
import XplorersAIChatBox from "./xplorersAIChatBox";
import { useXplorersAI, FileUploadEvent } from "@/hooks/useXplorersAI";
import { ChangeEvent } from "react";

export interface XplorersAIProps {
  handleFileUpload: (e: FileUploadEvent) => void;
  handleSubmit: (e: any) => Promise<void>;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const XplorersAIBody = () => {
  const {
    handleFileUpload,
    handleSubmit,
    handleInputChange,
    getMessages,
    value,
  } = useXplorersAI();

  const messages = getMessages();

  return (
    <div className="pt-8">
      <h2 className="typingText py-8">
        Hey there! I'm Xplorers AI—how can I help you today?
      </h2>
      {messages.length > 1 && <XplorersAIChatBox messages={messages} />}
      <XplorersAISearch
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        value={value}
      />
    </div>
  );
};
export default XplorersAIBody;
