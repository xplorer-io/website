import Event from "@/modules/events/EventType";

export const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Xplorers Monthly Catchup",
    image: "/illustrations/special-event-illustration.svg",
    date: "2024-09-15T10:00:00Z",
    organizerName: "Jane Doe",
    attendeesCount: 150,
    location: "level 1/299 Elizabeth St Sydney NSW 2000",
    attending: true,
  },
  {
    id: "2",
    title: "Hackathon",
    date: "2024-10-20T14:00:00Z",
    image: "/illustrations/schedule-illustration.svg",
    organizerName: "John Smith",
    attendeesCount: 30,
    location: "level 1/299 Elizabeth St Sydney NSW 2000",
    attending: false,
  },
  {
    id: "3",
    title: "Hackathon",
    date: "2024-10-20T14:00:00Z",
    image: "/illustrations/online-calendar.svg",
    organizerName: "John Smith",
    attendeesCount: 30,
    location: "level 1/299 Elizabeth St Sydney NSW 2000",
    attending: true,
  },
  {
    id: "4",
    title: "Hackathon",
    date: "2024-10-20T14:00:00Z",
    image: "/illustrations/events-illustration.svg",
    organizerName: "John Smith",
    attendeesCount: 30,
    location: "level 1/299 Elizabeth St Sydney NSW 2000",
    attending: false,
  },
];
