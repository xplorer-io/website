"use client";
import React from "react";
import { AppContextProvider } from "@/context/AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
const queryClient = new QueryClient();

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <AppContextProvider>{children}</AppContextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
