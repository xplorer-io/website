"use client";
import React from "react";
import Event from "./EventType";
import { CldImage } from "next-cloudinary";

type EventHeaderProps = {
  event: Event;
};

const EventHeader = ({ event }: EventHeaderProps) => {
  const { image, title } = event;

  return (
    <div className="relative h-64 w-full">
      {image && (
        <CldImage
          src={image}
          alt={`Image for ${title}`}
          fill
          style={{ objectFit: "contain" }}
          format="svg"
        />
      )}
    </div>
  );
};

export default EventHeader;
