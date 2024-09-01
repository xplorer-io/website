"use client"
import ButtonLink from "@/components/ui/buttons/ButtonLink";
import Image from "next/image";
import React, { useState } from 'react';
import EventForm from "@/modules/events/eventForm";
import { handleEditEventClick, handleFormSubmit } from "@/hooks/useEvents";
import EventType from "@/modules/events/EventType";

// TODO fix when api is ready
const post: EventType = {
    id: 2,
    date: "June 10, 2024",
    tags: ["Technology", "Programming"],
    title: "Introduction to React Hooks",
    image: "https://via.placeholder.com/400x200",
    description: `
            <p>React Hooks have revolutionized how we manage state and side effects in React functional components. Introduced in React 16.8, Hooks provide a more direct API for working with component state, context, refs, and more, all without needing to write a class component.</p>
        `,
    organizerName: "John Doe",
    attendeesCount: 10,
    location: "Google Office, Sydney"
};

// TODO dummy page (Needs properly formatted page that accepts WYSIWYG)
const EventPost = () => {
    const [formState, setFormState] = useState<{ showForm: boolean, currentEvent?: EventType }>({
        showForm: false,
        currentEvent: undefined
    });
    const handleEditClick = () => {
        handleEditEventClick(post, setFormState);
    };
    return (
        <div className="mx-auto max-w-4xl p-4">
            <div className="mb-4">
                <Image
                    src="https://via.placeholder.com/400x200"
                    alt={post.title}
                    width={900}
                    height={150}
                    className="rounded-lg"
                />
            </div>
            <div className="mb-4">
                <h1 className="mb-2 text-2xl font-bold">{post.title}</h1>
                <div className="mb-2 text-gray-600">{post.date}</div>
                <div className="mb-2 text-gray-600"> <p>{post.attendeesCount} Attending</p></div>
                <div className="mb-2 text-gray-600"> {post.location}</div>

                {post.description && (
                    <div
                        dangerouslySetInnerHTML={{ __html: post.description }}
                        className="prose"
                    />
                )}
                <div className="mt-8 text-center flex justify-center space-x-4">
                    <div>
                        <ButtonLink href="#">Register Now</ButtonLink>
                    </div>
                    <div>
                        <ButtonLink href="#" onClick={() => handleEditClick}>Edit Post</ButtonLink>
                    </div>
                    {formState.showForm && (
                        <EventForm
                            onSubmit={(e) => handleFormSubmit(e, setFormState)}
                        />
                    )}
                    <div>
                        <ButtonLink href="#">Delete</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPost;
