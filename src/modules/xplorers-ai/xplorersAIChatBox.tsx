"use client";

import React, { useEffect, useRef } from "react";
import { sanitizeMarkdown } from "@/utils/sanitizeMarkdown";
import { XplorersAIChatBoxProps, ChatMessage } from "@/models/XploresAI";

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
      role="log"
      aria-label="chat messages"
      aria-live="polite"
      className="chat-content flex max-h-[65vh] flex-col space-y-4 overflow-auto rounded-xl bg-white bg-opacity-50 p-3 shadow-md"
    >
      <div className="flex flex-col space-y-4">
        {messages?.map((message: ChatMessage, index: number) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.content && (
              <div
                className={`max-w-[75%] rounded p-2 ${
                  message.role === "user"
                    ? "bg-blue-200 text-right"
                    : "bg-white text-left"
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: sanitizeMarkdown(message.content),
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default XplorersAIChatBox;
