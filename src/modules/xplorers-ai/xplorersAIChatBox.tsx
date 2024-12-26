"use client";
import { ChatMessage } from "@/hooks/useXplorersAI";

import React, { useEffect, useRef } from "react";

interface XplorersAIChatBoxProps {
  messages: ChatMessage[];
}
const XplorersAIChatBox: React.FC<XplorersAIChatBoxProps> = ({ messages }) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div
      ref={chatContainerRef}
      className="chat-content flex max-h-[58vh] flex-col space-y-4 overflow-auto rounded-xl bg-white bg-opacity-50 p-3 shadow-md"
    >
      <div className="flex flex-col space-y-4">
        {messages &&
          messages.map((message: ChatMessage, index: number) => (
            <div key={index} className="">
              {message?.role === "user" && message?.content !== "" ? (
                <div className="rounded bg-blue-200 p-2">
                  {message?.content}
                </div>
              ) : message?.role === "system" && message?.content !== "" ? (
                <div className="rounded bg-white p-2">
                  {message?.content || "No content provided"}
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default XplorersAIChatBox;
