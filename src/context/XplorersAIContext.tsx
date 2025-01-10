"use client";
import React, {
  ChangeEvent,
  createContext,
  useContext,
  useRef,
  useState,
  MouseEvent,
} from "react";
import { ChatMessage, FileUploadEvent, XploresAIType } from "@/interface";
import { callAzureOpenAI } from "@/app/api/chat/ai";

const XplorersAIContext = createContext<XploresAIType | undefined>(undefined);

export const XplorersAIContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <XplorersAIContext.Provider
      value={{
        value,
        loading,
        handleInputChange,
        handleFileUpload,
        handleSubmit,
        getMessages,
      }}
    >
      {children}
    </XplorersAIContext.Provider>
  );
};

// Custom Hook to Access Context
export const useXplorersAIContext = () => {
  const context = useContext(XplorersAIContext);
  if (!context) {
    throw new Error(
      "useXplorersAIContext must be used within XplorersAIContextProvider",
    );
  }
  return context;
};
