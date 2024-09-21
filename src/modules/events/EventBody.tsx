import Event from "./EventType";
import homeLogo from "@public/images/icons/home.svg";
import calenderLogo from "@public/images/icons/calender.svg";
import bookmarkLogo from "@public/images/icons/bookmark.svg";
import bookmarkSavedLogo from "@public/images/icons/bookmark-filled.svg";
import Image from "next/image";
type EventBodyProps = Pick<Event, "date" | "organizerName" | "attendeesCount" | "title" | 'location' | 'attending'>;

const EventBody = ({ organizerName, date, attendeesCount, title, location, attending }: EventBodyProps) => (
  <div className="p-4 sm:p-6 lg:p-8">
    <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
    <div className="text-sm font-medium text-gray-600">
      Hosted by: {organizerName}
    </div>
    <div className="flex text-xs text-gray-500">
      <Image src={calenderLogo} alt="Home Logo text-gray-500"></Image>
      <p className="ml-2 p-1">  {date}</p>

    </div>
    <div className=" flex text-xs text-gray-500">
      <Image src={homeLogo} alt="Copyright Logo text-gray-500" />
      <p className="ml-2 p-1">{location}</p>
    </div>

    {attending ? (<div className="flex text-xs text-green-600">
      <Image src={bookmarkSavedLogo} alt="Bookmark Saved Logo"></Image>
      <p className="p-1 ml-2">Attending</p>
    </div>) :
      <div className="flex text-xs text-gray-500">
        <Image src={bookmarkLogo} alt="Bookmark Logo"></Image>
        <p className="p-1 ml-2 hover:text-primary "> Register Now</p>
      </div>}
  </div>
);

export default EventBody;
