import React from "react";
import Event from "./EventType";
import Image from "next/image";

type EventHeaderProps = {
  event: Event;
};

const EventHeader = ({ event }: EventHeaderProps) => {
  const { image, title } = event;

  return (
    <div className="relative h-64 w-full">
      {image && (
        <Image
          src={image}
          alt={`Image for ${title}`}
          layout="fill"
          objectFit="cover"
        />
      )}
    </div>
  );
};

export default EventHeader;
