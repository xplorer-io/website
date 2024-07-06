import React from 'react';
import Link from 'next/link';
import BlogHeader from './BlogHeader';
import BlogDescription from './BlogDescription';
import BlogMeta from './BlogMeta';

interface BlogCardProps {
    id: string;
    date: string;
    tags: string[];
    title: string;
    image: string;
    description: string;
    authorName: string;
    authorImage: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, date, tags, title, image, description, authorName, authorImage }) => (
    <Link href={`/blogs/${id}`} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-red-600"></span>
        <BlogHeader title={title} authorName={authorName} authorImage={authorImage} />
        <BlogDescription description={description} />
        <BlogMeta date={date} tags={tags} />
    </Link>
);

export default BlogCard;
