import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import useVerifyActiveUser from "@/hooks/useVerifyActiveUser";

const withActiveUser = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();
        const { userId } = useAuth();
        const { data, isLoading, error } = useVerifyActiveUser({ userId });

        useEffect(() => {
            if (!isLoading && data && !data.isActive) {
                router.push('/inactive');
            }
        }, [isLoading, data, router]);

        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return <WrappedComponent {...props} />;
    };
};

export default withActiveUser;
