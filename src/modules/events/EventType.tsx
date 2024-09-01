type EventType = {
    id: number;
    user_id?: number;
    username?: string;
    title: string;
    tags?: Array<string>;
    image?: string;
    location?: string;
    date: string;
    description?: string;
    organizerName: string;
    attendeesCount: number;
    isActive?: 
};
export default EventType;
