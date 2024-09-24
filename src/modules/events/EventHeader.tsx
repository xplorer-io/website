import React from "react";
import Image from "next/image";
import Event from "./EventType";

type EventHeaderProps = {
  event: Event;
};

const EventHeader = ({ event }: EventHeaderProps) => {
  const { image, title } = event;

  return (
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
};

export default EventHeader;
