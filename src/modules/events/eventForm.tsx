import EventType from "./EventType";
import ButtonLink from "@/components/ui/buttons/ButtonLink";
import { Input } from "@/components/ui/input";
import React from "react";

interface EventFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    event?: EventType;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, event = {} as EventType }) => {
    const [formValues, setFormValues] = React.useState<EventType | {}>(event || {});

    // Update form values when event prop changes
    React.useEffect(() => {
        if (event) {
            setFormValues(event);
        }
    }, [event]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <form onSubmit={onSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                {event.id ? 'Edit Event' : 'Add Event'}
            </h2>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Event Title</label>
                <Input
                    id="title"
                    name="title"
                    value={(formValues as EventType).title || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <Input
                    id="date"
                    name="date"
                    type="date"
                    value={(formValues as EventType).date || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                <Input
                    type="time"
                    id="time"
                    name="time"
                    value={(formValues as EventType).date && new Date((formValues as EventType).date).toISOString().slice(11, 16)}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <Input
                    type="text"
                    id="location"
                    name="location"
                    value={(formValues as EventType).location || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <Input
                    id="description"
                    name="description"
                    value={(formValues as EventType).description || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Event Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mt-8 text-center flex justify-center space-x-4">
                <ButtonLink href="#" onClick={() => { /* Handle Add Event */ }}>Add Event</ButtonLink>
                <ButtonLink href="#" onClick={() => { /* Handle Cancel */ }}>Cancel</ButtonLink>
            </div>
        </form>
    );
};

export default EventForm;
