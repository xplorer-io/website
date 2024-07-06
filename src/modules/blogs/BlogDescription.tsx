import React from 'react';
import { truncateDescription } from '@/lib/formatStrings';

interface BlogDescriptionProps {
    description: string;
}

const BlogDescription: React.FC<BlogDescriptionProps> = ({ description }) => (
    <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500">{truncateDescription(description, 100)}</p>
    </div>
);

export default BlogDescription;
