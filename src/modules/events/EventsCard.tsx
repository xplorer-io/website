import React from "react";
import EventHeader from "./EventHeader";
import EventBody from "./EventBody";
import Event from "./EventType";

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => (
  <div className="relative block transform cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-blue-100 shadow-lg transition duration-150 ease-in-out hover:scale-105">
    <EventHeader event={event} />
    <EventBody event={event} />
  </div>
);

export default EventCard;
