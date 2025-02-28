import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import useSlackUserStatus from "@/hooks/useSlackUserStatus";

type AppContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
  isActiveSlackUser: boolean;
  user?: {
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
};

const AppContext = React.createContext<AppContext | undefined>({
  isActiveSlackUser: false,
  isLoggedIn: false,
  isLoading: false,
  user: undefined,
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session, status } = useSession();
  const { data, isLoading: isSlackLoading } = useSlackUserStatus();
  const isLoading = status === "loading" || isSlackLoading;

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !!session,
        isLoading,
        isActiveSlackUser: data?.isActive ?? false,
        user: session?.user,
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
