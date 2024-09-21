type Event = {
  id: string;
  title: string;
  image?: string;
  date: string;
  organizerName: string;
  attendeesCount: number;
  location: string;
  attending: boolean;
};
export default Event;
