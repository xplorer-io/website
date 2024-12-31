"use client";

import { callAzureOpenAI } from "@/app/api/chat/ai";
import { ChatMessage, FileUploadEvent } from "@/interface";
import { useState, useRef, ChangeEvent, MouseEvent } from "react";

export const useXplorersAI = () => {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "user", content: "" },
  ]);
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textValue = e.target.value;
    setValue(textValue);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleFileUpload = (e: FileUploadEvent) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      console.log("File uploaded:", file);
    }
  };
  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    setLoading(true);
    if (value.trim()) {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }

    const userMessage: ChatMessage = {
      role: "user",
      content: value,
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await callAzureOpenAI(messages);

      const systemMessage: ChatMessage = {
        role: "system",
        content: res,
      };

      setMessages((prev) => [...prev, systemMessage]);
      setValue("");

      setLoading(false);
    } catch (error) {
      console.log("AI Call Failed", error);
    }
  };

  const getMessages = () => messages;
  return {
    value,
    setValue,
    handleInputChange,
    handleFileUpload,
    handleSubmit,
    getMessages,
    loading,
  };
};
