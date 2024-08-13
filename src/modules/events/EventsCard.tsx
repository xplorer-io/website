import React from 'react';
import Link from "next/link";
import EventHeader from './EventHeader';
import EventBody from './EventBody';

type EventCardProps = {
    id: string;
    date: string;
    title: string;
    image?: string;
    organizerName: string;
    attendeesCount: number;
};

const EventCard = ({
    id,
    date,
    title,
    image,
    organizerName,
    attendeesCount,
}: EventCardProps) => (
    <Link href={'#'}>
        <EventHeader
            title={title}
            image="https://i.imgur.com/cb4V8sz_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        />
        <EventBody
            organizerName={organizerName}
            date={date}
            attendeesCount={attendeesCount}
        />
    </Link>

);

export default EventCard;
