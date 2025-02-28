import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CheckedState } from "@radix-ui/react-checkbox";

type FormData = {
  fullName: string;
  message: string;
  isAnonymous: boolean;
};

// TODO Fix needed when we have BE ready
export const useCreateAccolades = () => {
  const { data: session } = useSession();

  const [fullName, setFullName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user?.name) {
      setFullName(session.user.name);
    }
  }, [session?.user?.name]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      fullName: isAnonymous ? "Anonymous" : fullName,
      message,
      isAnonymous,
    };
  };

  const handleCheckboxChange = (checked: CheckedState) => {
    setIsAnonymous(!checked);
  };

  return {
    fullName,
    setFullName,
    message,
    setMessage,
    isAnonymous,
    setIsAnonymous,
    handleSubmit,
    handleCheckboxChange,
  };
};
