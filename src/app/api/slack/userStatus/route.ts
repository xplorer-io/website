import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get('userEmail');

    if (!userEmail) {
        return NextResponse.json({ error: 'User email is required' }, { status: 400 });
    }
    try {
        const response = await axios.get(`${process.env.SLACK_API_ROOT_PATH}/slack/user/status`, {
            params: { userEmail },
            headers: {
                'x-api-key': process.env.SLACK_API_TOKEN,
            },
        });
        console.log({response})
        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching Slack user status' }, { status: 500 });
    }
}
