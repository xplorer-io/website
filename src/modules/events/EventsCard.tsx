import React from "react";
import EventHeader from "./EventHeader";
import EventBody from "./EventBody";
import Event from "./EventType";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => (
  <Card className="relative block transform cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-blue-100 shadow-lg transition duration-150 ease-in-out hover:scale-105">
    <CardHeader className="p-0">
      <EventHeader event={event} />
    </CardHeader>
    <CardContent className="p-0">
      <EventBody event={event} />
    </CardContent>
  </Card>
);

export default EventCard;
