import { ChatMessage } from "@/models/XploresAI";
import axios from "axios";
import { useSnackbar } from "notistack";
import { ChangeEvent, useRef, useState } from "react";

const useXplorersAI = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

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
    const file = e.target.files ? e.target.files[0] : undefined;

    if (file) {
      console.debug("File uploaded:", file);

      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File size exceeds 5MB limit");
      }

      if (!["text/plain", "application/pdf"].includes(file.type)) {
        throw new Error("Unsupported file type");
      }

      try {
        setLoading(true);
        setFile(file);
      } catch (error) {
        console.error("File upload failed:", error);
        enqueueSnackbar({
          message: "Something went wrong! Please try again later.",
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
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
      const response = await axios.post(`/api/chat`, {
        messages,
      });

      const systemMessage: ChatMessage = {
        role: "system",
        content: response.data,
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
