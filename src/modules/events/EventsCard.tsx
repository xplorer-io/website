import React from "react";
import Link from "next/link";
import EventHeader from "./EventHeader";
import EventBody from "./EventBody";
import Event from "./EventType";

type EventCardProps = Event;

const EventCard = ({
  id,
  date,
  title,
  image,
  organizerName,
  attendeesCount,
  location,
  attending,
}: EventCardProps) => (
  <div className="relative block transform cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-blue-100 shadow-lg transition duration-150 ease-in-out hover:scale-105">
    <EventHeader title={title} image={image} />
    <EventBody
      organizerName={organizerName}
      date={date}
      attendeesCount={attendeesCount}
      title={title}
      location={location}
      attending={attending}
    />
  </div>
);

export default EventCard;
