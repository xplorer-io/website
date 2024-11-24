import Event from "./EventType";
import homeLogo from "@public/icons/home.svg";
import calenderLogo from "@public/icons/calender.svg";
import bookmarkLogo from "@public/icons/bookmark.svg";
import bookmarkSavedLogo from "@public/icons/bookmark-filled.svg";
import Image from "next/image";

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
        <Image src={calenderLogo} alt="Home Logo" loading="lazy" />

        <p className="ml-2 p-1"> {date}</p>
      </div>
      <div className="flex text-xs text-gray-500">
        <Image src={homeLogo} alt="Home Logo" loading="lazy" />
        <p className="ml-2 p-1">{location}</p>
      </div>

      {attending ? (
        <div className="flex text-xs text-green-600">
          <Image src={bookmarkSavedLogo} alt="Home Logo" loading="lazy" />
          <p className="ml-2 p-1">Attending</p>
        </div>
      ) : (
        <div className="flex text-xs text-gray-500">
          <Image src={bookmarkLogo} alt="Home Logo" loading="lazy" />
          <p className="ml-2 p-1 hover:text-primary"> Register Now</p>
        </div>
      )}
    </div>
  );
};

export default EventBody;
