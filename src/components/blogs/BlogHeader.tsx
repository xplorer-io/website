import React from 'react';

interface BlogHeaderProps {
    title: string;
    authorName: string;
    authorImage: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, authorName, authorImage }) => (
    <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
            <p className="mt-1 text-xs font-medium text-gray-600">By {authorName}</p>
        </div>
        <div className="hidden sm:block sm:shrink-0">
            <img alt="author image" src={authorImage} className="size-16 rounded-lg object-cover shadow-sm" />
        </div>
    </div>
);

export default BlogHeader;
