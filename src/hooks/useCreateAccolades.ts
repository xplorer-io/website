import React, {useEffect, useState} from "react";
import { useUser } from "@clerk/nextjs";
import {CheckedState} from "@radix-ui/react-checkbox";

type FormData = {
    fullName: string;
    message: string;
    isAnonymous: boolean;
}

// TODO Fix needed when we have BE ready
export const useCreateAccolades = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    const [fullName, setFullName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            setFullName(user?.fullName || "");
        }
    }, [isLoaded, isSignedIn, user]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: FormData = {
            fullName: isAnonymous ? "Anonymous" : fullName,
            message,
            isAnonymous,
        };
    };

    const handleCheckboxChange = (checked:CheckedState) => {
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
