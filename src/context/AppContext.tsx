import React, { useContext } from "react";
import {useAuth, useUser} from "@clerk/nextjs";
import useVerifyActiveUser from "@/hooks/useVerifyActiveUser";

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
  const { user } = useUser();
  const { data } = useVerifyActiveUser({userEmail: user?.primaryEmailAddress?.emailAddress});
    console.log({data})
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
