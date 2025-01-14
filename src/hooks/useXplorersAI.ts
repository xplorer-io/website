import { callAzureOpenAI } from "@/app/api/chat/ai";
import { ChatMessage } from "@/models/XploresAI";
import { useSnackbar } from "notistack";
import { ChangeEvent, useRef, useState } from "react";

const useXplorersAI = () => {
  const { enqueueSnackbar } = useSnackbar();
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      console.debug("File uploaded:", file);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
      console.debug("AI Call Failed", error);
      setLoading(false);
      enqueueSnackbar({
        message: "Something went wrong! Please try again later.",
        variant: "error",
      });
    }
  };

  return {
    value,
    loading,
    handleInputChange,
    handleFileUpload,
    handleSubmit,
    messages,
  };
};

export default useXplorersAI;
