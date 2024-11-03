"use client";
import Event from "./EventType";
import { CldImage } from "next-cloudinary";

type EventBodyProps = {
  event: Event;
};

const EventBody = ({ event }: EventBodyProps) => {
  const { organizerName, date, attendeesCount, title, location, attending } =
    event;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
      <div className="text-sm font-medium text-gray-600">
        Hosted by: {organizerName}
      </div>
      <div className="flex text-xs text-gray-500">
        <CldImage
          src="calender_rumkyd"
          alt="Home Logo"
          width={20}
          height={10}
          loading="lazy"
        />

        <p className="ml-2 p-1"> {date}</p>
      </div>
      <div className="flex text-xs text-gray-500">
        <CldImage
          src="home_ded4jk"
          alt="Home Logo"
          width={20}
          height={10}
          loading="lazy"
        />
        <p className="ml-2 p-1">{location}</p>
      </div>

      {attending ? (
        <div className="flex text-xs text-green-600">
          <CldImage
            src="bookmark-filled_arguow"
            alt="Home Logo"
            width={20}
            height={10}
            loading="lazy"
          />
          <p className="ml-2 p-1">Attending</p>
        </div>
      ) : (
        <div className="flex text-xs text-gray-500">
          <CldImage
            src="bookmark_lfi0wt"
            alt="Home Logo"
            width={20}
            height={10}
            loading="lazy"
          />
          <p className="ml-2 p-1 hover:text-primary"> Register Now</p>
        </div>
      )}
    </div>
  );
};

export default EventBody;
