import React from 'react';
import Link from 'next/link';
import BlogHeader from './BlogHeader';
import BlogDescription from './BlogDescription';
import BlogMeta from './BlogMeta';

type BlogCardProps = {
    id: string;
    date: string;
    tags: string[];
    title: string;
    image: string;
    description: string;
    authorName: string;
    authorImage: string;
}

const BlogCard = ({ id, date, tags, title, image, description, authorName, authorImage }:BlogCardProps) => (
    <Link href={`/blogs/${id}`} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-300 via-secondary-500 to-gray-50"></span>
        <BlogHeader title={title} authorName={authorName} authorImage={authorImage} />
        <BlogDescription description={description} />
        <BlogMeta date={date} tags={tags} />
    </Link>
);

export default BlogCard;
