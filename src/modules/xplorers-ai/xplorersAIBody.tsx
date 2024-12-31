"use client";

import XplorersAISearch from "./xplorersAISearch";
import XplorersAIChatBox from "./xplorersAIChatBox";
import { useXplorersAI } from "@/hooks/useXplorersAI";
import { ChangeEvent } from "react";
import { FileUploadEvent } from "@/interface";

export interface XplorersAIProps {
  handleFileUpload: (e: FileUploadEvent) => void;
  handleSubmit: (e: any) => Promise<void>;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const XplorersAIBody = () => {
  const {
    getMessages,
    value,
    loading,
    handleInputChange,
    handleSubmit,
    handleFileUpload,
  } = useXplorersAI();

  const messages = getMessages();
  return (
    <div className="pt-8">
      <h2 className="typing-text py-8">
        Hey there! I&apos;m Xplorers AI—how can I help you today?
      </h2>
      <div className="min-h-[70vh] overflow-auto">
        {messages.length > 1 && <XplorersAIChatBox messages={messages} />}
        <XplorersAISearch
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleFileUpload={handleFileUpload}
          value={value}
          loading={loading}
        />
      </div>
    </div>
  );
};
export default XplorersAIBody;
