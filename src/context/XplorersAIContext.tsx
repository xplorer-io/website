"use client";

import React, { createContext, useContext } from "react";
import { XploresAIState } from "@/models/XploresAI";
import useXplorersAI from "@/hooks/useXplorersAI";

export const XplorersAIContext = createContext<XploresAIState | undefined>(
  undefined,
);

export const useXplorersAIContext = () => {
  const context = useContext(XplorersAIContext);
  if (!context) {
    throw new Error("XplorersAIContext is not provided");
  }
  return context;
};

const XplorersAIContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const initialState = useXplorersAI();

  return (
    <XplorersAIContext.Provider value={initialState}>
      {children}
    </XplorersAIContext.Provider>
  );
};

export default XplorersAIContextProvider;
