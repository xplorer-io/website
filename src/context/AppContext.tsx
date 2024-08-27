import React, {useContext} from "react";
import {useAuth, useUser} from "@clerk/nextjs";
import useSlackUserStatus from "@/hooks/useSlackUserStatus";

type AppContext = {
    isLoggedIn: boolean;
    isLoading: boolean;
    isActiveSlackUser: boolean;
};

const AppContext = React.createContext<AppContext | undefined>({
    isActiveSlackUser: false,
    isLoggedIn: false,
    isLoading:false
});

export const AppContextProvider = ({
                                       children,
                                   }: {
    children: React.ReactNode;
}) => {
    const { isLoaded: isAuthLoaded, userId } = useAuth();
    const { user, isLoaded: isUserLoaded } = useUser();
    const { data, isLoading: isSlackLoading } = useSlackUserStatus(user?.primaryEmailAddress?.emailAddress);
    const isLoading = !isAuthLoaded || !isUserLoaded || isSlackLoading;

    return (
        <AppContext.Provider
            value={{
                isLoggedIn: !!userId,
                isLoading,
                isActiveSlackUser: data?.isActive ?? false
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
