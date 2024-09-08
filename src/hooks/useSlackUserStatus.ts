import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useSlackUserStatus = (userEmail?: string) => {
    return useQuery({
        queryKey: ['slackUserStatus', userEmail],
        queryFn: async () => {
            const response = await axios.get(`/api/slack/userStatus`, {
                params: { userEmail },
            });
            return response.data;
        },
        enabled: !!userEmail,
        retry: false,
    });
};

export default useSlackUserStatus;
