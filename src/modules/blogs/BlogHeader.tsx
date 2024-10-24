"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

type BlogHeaderProps = {
  title: string;
  authorName: string;
  authorImage: string;
};

const BlogHeader = ({ title, authorName, authorImage }: BlogHeaderProps) => (
  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-primary-700 sm:text-xl">{title}</h3>
      <p className="mt-1 text-xs font-medium text-gray-600">By {authorName}</p>
    </div>
    <div className="hidden sm:block sm:shrink-0">
      <CldImage
        src={authorImage}
        alt="author image"
        width={64}
        height={64}
        format="svg"
        className="size-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>
);

export default BlogHeader;
