import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useSlackUserStatus = (userEmail?: string) => {
    return useQuery({
        queryKey: ['slackUserStatus', userEmail],
        queryFn: async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_SLACK_API_ROOT_PATH}/slack/user/status`,
                {
                    params: {userEmail},
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_SLACK_API_TOKEN,
                    },
                }
            );
            return response.data;
        },
        enabled: !!userEmail
    });
};

export default useSlackUserStatus;
