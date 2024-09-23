import React from "react";
import Image from "next/image";
import Event from "./EventType";

type EventHeaderProps = Pick<Event, "title" | "image">;

const EventHeader = ({ title, image }: EventHeaderProps) => (
  <div className="relative h-64 w-full">
    {image && (
      <Image
        alt={`Image for ${title}`}
        src={image}
        layout="fill"
        objectFit="cover"
      />
    )}
  </div>
);

export default EventHeader;
