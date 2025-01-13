import { ChangeEvent, MouseEvent } from "react";

export interface XploresAIType {
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  handleFileUpload: (e: FileUploadEvent) => void;
  value: string;
  loading: boolean;
  getMessages: () => ChatMessage[];
}

export interface XplorersAIChatBoxProps {
  messages: ChatMessage[];
}

export interface FileUploadEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

export interface ChatMessage {
  role: "user" | "system";
  content: string;
}
