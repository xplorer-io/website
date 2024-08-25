"use client";

import React from "react";
import {AppContextProvider} from "@/context/AppContext";
import {ClerkProvider} from "@clerk/nextjs";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export function Providers({children}: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
                <AppContextProvider>{children}</AppContextProvider>
            </ClerkProvider>
        </QueryClientProvider>
    );
}
