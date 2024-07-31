import React, { useContext } from "react";
import { useAuth } from "@clerk/nextjs";

type AppContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoaded, userId } = useAuth();
  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !!userId,
        isLoading: !isLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
