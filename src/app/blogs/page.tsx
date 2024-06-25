import React from "react";
import BlogCard from "@/components/blogs/BlogCard";
import {blogPosts} from "@/data/blogsData";
import TitleHeader from "@/components/ui/TitleHeader";
import PagesWrapper from "@/components/layout/PagesWrapper";

const BlogPage: React.FC = () => (
    <PagesWrapper>
        <TitleHeader
            title={'Blogs'}
            description={'Dive into a diverse collection of articles crafted by our community. Join the conversation, engage with other readers, and contribute to our vibrant blogging community.'}/>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blogPosts.map((post, index) => (
                <BlogCard
                    key={post.id}
                    {...post}
                />
            ))}
        </div>
    </PagesWrapper>
);
export default BlogPage;
