import React from 'react';
import Tag from "@/components/ui/Tag";

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
                <Tag key={tag} tag={tag} />
            ))}
        </div>
    </div>
);

export default BlogMeta;
