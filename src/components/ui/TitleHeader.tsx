import React from "react";

type TitleHeaderProps = {
    title: string;
    description: string;
};

const TitleHeader = ({ title, description }:TitleHeaderProps) => {
    return (
        <div className="mx-auto py-8 sm:py-12">
            <div className="sm:flex sm:items-center sm:justify-between gap-10">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h1>
                    <p className="mt-2.5 text-sm text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TitleHeader;
