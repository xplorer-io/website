"use client";
import { ChatMessage, XplorersAIChatBoxProps } from "@/interface";
import React, { useEffect, useRef } from "react";
import { marked } from "marked";

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
      className="chat-content flex max-h-[58vh] flex-col space-y-4 overflow-auto rounded-xl bg-white bg-opacity-50 p-3 shadow-md"
    >
      <div className="flex flex-col space-y-4">
        {messages?.map((message: ChatMessage, index: number) => (
          <div key={index} className="">
            {message?.content && (
              <div
                className={`rounded p-2 ${message.role === "user" ? "bg-blue-200" : "bg-white"}`}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: marked(message.content) }}
                ></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default XplorersAIChatBox;
