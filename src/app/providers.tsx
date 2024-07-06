'use client';

import React from 'react';
import {AppContextProvider} from '@/context/AppContext';
import {ClerkProvider} from "@clerk/nextjs";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <AppContextProvider>
                {children}
            </AppContextProvider>
        </ClerkProvider>
    );
}
