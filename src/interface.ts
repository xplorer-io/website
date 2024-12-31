import { ChangeEvent, MouseEvent } from "react";

export interface SearchProps {
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  handleFileUpload: (e: FileUploadEvent) => void;
  value: string;
  loading: Boolean;
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
