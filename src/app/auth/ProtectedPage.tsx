import React from 'react';
import withActiveUser from "@/app/auth/withActiveUser";

const ProtectedPage = () => {
    return <div>This is a protected page only for active users!</div>;
};

export default withActiveUser(ProtectedPage);
