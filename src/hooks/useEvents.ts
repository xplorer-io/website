import React, { Dispatch, SetStateAction } from 'react';
import Event from "@/modules/events/EventType";

interface FormData {
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    organizerName: string;
    attendeesCount: number;
}

export const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    setFormState: Dispatch<SetStateAction<{ showForm: boolean; currentEvent?: Event }>>,
    existingEvent?: Event
) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
        title: formData.get('title') as string,
        date: formData.get('date') as string,
        location: formData.get('location') as string,
        description: formData.get('description') as string,
        image: formData.get('image') as string,
        organizerName: formData.get('organizerName') as string,
        attendeesCount: parseInt(formData.get('attendeesCount') as string, 10)
    };

    console.log('Form Data:', data);

    setFormState(prevState => ({
        ...prevState,
        showForm: false
    }));
};

export const handleAddNewEventClick = (setShowForm: Dispatch<SetStateAction<boolean>>) => {
    setShowForm(true);
};

export const handleEditEventClick = (
    event: Event,
    setFormState: Dispatch<SetStateAction<{ showForm: boolean; currentEvent?: Event }>>
) => {
    setFormState({ showForm: true, currentEvent: event });
};
