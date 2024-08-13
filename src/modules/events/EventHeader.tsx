import React from "react"
import Image from "next/image"

type EventHeaderProps = {
    title: string,
    image?: string
}

const EventHeader = ({ title, image }: EventHeaderProps) => (
    <div className="relative w-full sm:w-64 h-64 rounded-lg overflow-hidden shadow-sm">
        {image && (
            <div className="h-[65%] w-full relative">
                <Image
                    alt={`Image for ${title}`}
                    src={image}
                    layout="fill"
                    objectFit="scale-down"
                />
            </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-white p-4">
            <h3 className="text-sm font-bold text-primary-700">{title}</h3>
        </div>
    </div>
);

export default EventHeader