import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface FormData {
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
        console.log(formData);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAnonymous(e.target.checked);
        if (e.target.checked) {
            setFullName("");
        }
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
