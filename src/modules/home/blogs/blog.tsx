"use client";
import Image from "next/image";
import { Button } from "@/components/ui/buttons/button";
import arrow from "@public/images/icons/arrow.svg";
import { communityBenefitsList } from "../communityBenefits/helper";
import BlogCard from "@/modules/blogs/BlogCard";
import { Blog } from "./blogCard";
import { BlogList } from "./helper";

export const Blogs = () => {
  return (
    <section className="md:flex-col-2 container mx-auto my-10 flex flex-col justify-center gap-10">
      <h1 className="text-center text-2xl font-semibold lg:text-left">
        Our Blog
      </h1>
      <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:grid-cols-3 lg:gap-6">
        {BlogList.map(
          (
            { name, date, writer_image, title, description, type, image },
            index,
          ) => (
            <Blog
              name={name}
              date={date}
              writer_image={writer_image}
              title={title}
              description={description}
              type={type}
              image={image}
            />
          ),
        )}
      </section>
    </section>
  );
};
