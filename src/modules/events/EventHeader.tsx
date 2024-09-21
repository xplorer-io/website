import React from "react";
import Image from "next/image";
import Event from "./EventType";

type EventHeaderProps = Pick<Event, "title" | "image">;

const EventHeader = ({ title, image }: EventHeaderProps) => (
  <div className="relative w-full h-64 ">
    {image && (
      <Image
        alt={`Image for ${title}`}
        src={image}
        layout="fill" objectFit="cover"
      />
    )}

  </div>
);

export default EventHeader;
