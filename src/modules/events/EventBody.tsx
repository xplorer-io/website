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
          src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578481/calender_rumkyd.svg"
          alt="Home Logo"
          width={20}
          height={10}
        />

        <p className="ml-2 p-1"> {date}</p>
      </div>
      <div className="flex text-xs text-gray-500">
        <CldImage
          src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578488/home_ded4jk.svg"
          alt="Home Logo"
          width={20}
          height={10}
        />
        <p className="ml-2 p-1">{location}</p>
      </div>

      {attending ? (
        <div className="flex text-xs text-green-600">
          <CldImage
            src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578475/bookmark-filled_arguow.svg"
            alt="Home Logo"
            width={20}
            height={10}
          />
          <p className="ml-2 p-1">Attending</p>
        </div>
      ) : (
        <div className="flex text-xs text-gray-500">
          <CldImage
            src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578478/bookmark_lfi0wt.svg"
            alt="Home Logo"
            width={20}
            height={10}
          />
          <p className="ml-2 p-1 hover:text-primary"> Register Now</p>
        </div>
      )}
    </div>
  );
};

export default EventBody;
