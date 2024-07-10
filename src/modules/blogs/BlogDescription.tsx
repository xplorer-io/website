import React from "react";
import { truncateDescription } from "@/lib/formatStrings";

type BlogDescriptionProps = {
  description: string;
};

const BlogDescription = ({ description }: BlogDescriptionProps) => (
  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
      {truncateDescription(description, 100)}
    </p>
  </div>
);

export default BlogDescription;
