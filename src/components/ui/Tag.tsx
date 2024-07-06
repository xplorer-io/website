import React from 'react';

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => (
    <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-600">
    {tag}
  </span>
);

export default Tag;
