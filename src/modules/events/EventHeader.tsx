import React from "react";
import Image from "next/image";
import Event from "./EventType";

type EventHeaderProps = Pick<Event, "title" | "image">;

const EventHeader = ({ title, image }: EventHeaderProps) => (
  <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-sm sm:w-64">
    {image && (
      <div className="relative h-[65%] w-full">
        <Image
          alt={`Image for ${title}`}
          src={image}
          layout="fill"
          objectFit="scale-down"
        />
      </div>
    )}
    <div className="absolute inset-x-0 bottom-0 bg-white p-4">
      <h3 className="text-sm font-bold text-primary-700">{title}</h3>
    </div>
  </div>
);

export default EventHeader;
