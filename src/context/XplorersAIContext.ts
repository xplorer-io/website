"use client";

import React, { createContext, useContext } from "react";
import { XploresAIType } from "@/models/XploresAI";

export const XplorersAIContext = createContext<XploresAIType | undefined>(
  undefined,
);

// Custom Hook to Access Context
export const useXplorersAIContext = () => {
  const context = useContext(XplorersAIContext);
  if (!context) {
    throw new Error(
      "useXplorersAIContext must be used within XplorersAIContextProvider",
    );
  }
  return context;
};
