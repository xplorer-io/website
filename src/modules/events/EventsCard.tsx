import React from 'react';
import Link from "next/link";
import EventHeader from './EventHeader';
import EventBody from './EventBody';
import EventType from './EventType';

type EventCardProps = EventType

const EventCard = ({
    id,
    date,
    title,
    image,
    organizerName,
    attendeesCount,
}: EventCardProps) => (
    <Link href={`/events/${id}`}>
        <EventHeader
            title={title}
            image={image}
        />
        <EventBody
            organizerName={organizerName}
            date={date}
            attendeesCount={attendeesCount}
        />
    </Link>

);

export default EventCard;
