import React from 'react';
import Link from "next/link";
import EventHeader from './EventHeader';
import EventBody from './EventBody';
import Event from './EventType';

type EventCardProps = Event

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
