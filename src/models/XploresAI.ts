import { ChangeEvent, MouseEvent } from "react";

export interface XploresAIState {
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  loading: boolean;
  messages: ChatMessage[];
}

export interface XplorersAIChatBoxProps {
  messages: ChatMessage[];
}

export interface ChatMessage {
  role: "user" | "system";
  content: string;
}
