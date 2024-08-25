import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://xplorers-api-gateway-81ubnfbi.uc.gateway.dev/slack/user';
const API_KEY = 'AIzaSyC1hTWnjAS8dIAs2olVN5qC3fi4ACc4kw8';

const verifyActiveUser = async ({ queryKey }) => {
    const [_, params] = queryKey;
    console.log({params})
    const { userEmail } = params;

    // Construct the query parameter string based on which parameter is provided
    const queryParams = new URLSearchParams();
    if (userEmail) queryParams.append('userEmail', userEmail);
    queryParams.append('key', API_KEY);

    const response = await axios.get(`${BASE_URL}?${queryParams.toString()}`);
    console.log({response})
    return response.data;
};

const useVerifyActiveUser = (params) => {
    console.log({params})
    return useQuery({
        queryKey: ['verifyActiveUser', params],
        queryFn: verifyActiveUser,
        enabled: !!params.userEmail,
    });
};

export default useVerifyActiveUser;
