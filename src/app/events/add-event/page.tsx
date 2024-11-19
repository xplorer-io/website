import { AddEventPage } from "@/modules/add-event";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Event - Create and Manage Your Events",
  description:
    "Easily add and manage your events with our user-friendly 'Add Event' page. Provide event details, upload images, and share them with your audience. Start creating events now!",
};

const AddEvent = () => {
  return <AddEventPage />;
};

export default AddEvent;
