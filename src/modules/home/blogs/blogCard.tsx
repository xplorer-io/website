import Image from "next/image";
import { BlogCardProps } from "./helper";

export const Blog = ({
  name,
  date,
  writer_image,
  title,
  description,
  type,
  image,
}: BlogCardProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-lg border border-black bg-gray-100 p-2"
      key={title}
    >
      <div className="mx-auto w-full rounded-lg">
        <Image
          className="h-full w-full cursor-pointer rounded-lg object-cover transition-all duration-500 hover:scale-95"
          src={`https://picsum.photos/id/${Math.floor(Math.random())}/200/150`}
          alt="GitHub"
          width={200}
          height={150}
        />

        <div className="p-4">
          <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold uppercase leading-none tracking-wide text-gray-800">
            {type}
          </span>
          <h2 className="mb-2 mt-2 cursor-pointer text-xl font-semibold leading-tight text-gray-900">
            {title}
          </h2>
          <div className="mt-4 flex items-center gap-4">
            <Image
              className="h-10 w-10 rounded-full object-cover"
              src="https://via.placeholder.com/40"
              alt="Writer Image"
              width={200}
              height={200}
            />{" "}
            <p className="text-sm font-semibold text-gray-400">Pras</p>
            <p className="text-xs text-gray-400">{"April 30, 2022"}</p>
            <div className="ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
