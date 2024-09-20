import Event from "./EventType";

type EventBodyProps = Pick<Event, "date" | "organizerName" | "attendeesCount">;

const EventBody = ({ organizerName, date, attendeesCount }: EventBodyProps) => (
  <div className="p-4">
    <p className="text-sm font-medium text-gray-600">
      Hosted by: {organizerName}
    </p>
    <p className="text-xs text-gray-500">{date}</p>
    <p className="text-xs text-gray-500">{attendeesCount} Attending</p>
  </div>
);

export default EventBody;
