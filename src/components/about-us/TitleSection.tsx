import React from "react";

// TODO  Move text to localisation
const TitleSection = () => {
    return (
        <div className="mx-auto max-w-xl ltr:text-left rtl:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Who are Xplorers?
            </h2>
            <p className="text-gray-500 md:mt-4">
                Xplorers is a group of dedicated tech professionals and up-coming tech talents. We are united by
                our dedication to fostering growth and innovation throughout the tech community.
            </p>
            <p className="text-gray-500 md:mt-4">
                From <strong>Fitness</strong> to <strong>Finance</strong>, from <strong>Knowledge
                Sharing</strong> to <strong>Musical Pursuits</strong>, we believe in embracing every opportunity
                for development and enrichment. We provide a nurturing environment where like-minded individuals
                can build lasting connections and networks, guided by our motto:
            </p>
            <div className="flex mt-2">
                <span className="block text-2xl font-semibold animate-pulse">
                    <span style={{
                        background: 'linear-gradient(90deg, #f6d365 0%, #fda085 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Learn</span>
                    <span style={{
                        background: 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginLeft: '8px'
                    }}>Share</span>
                    <span style={{
                        background: 'linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginLeft: '8px'
                    }}>Grow</span>
                </span>
            </div>
            <div className="mt-4 md:mt-8">
                <a
                    className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href="#"
                >
                    <span className="text-sm font-medium">Join Xplorers Today</span>
                    <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default TitleSection;
