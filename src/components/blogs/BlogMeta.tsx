import React from 'react';

interface BlogMetaProps {
    date: string;
    tags: string[];
}

const BlogMeta: React.FC<BlogMetaProps> = ({ date, tags }) => (
    <div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">{date}</dd>
            </div>
            <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
        </dl>
        <div className="mt-4 flex flex-wrap gap-1">
            {tags.map((tag) => (
                <span key={tag} className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-600">
          {tag}
        </span>
            ))}
        </div>
    </div>
);

export default BlogMeta;
