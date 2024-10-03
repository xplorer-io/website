import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImagePassProps {
  display?: boolean;
  src: string;
  alt: string;
  link?: string;
}

const ImagePass: React.FC<ImagePassProps> = ({ display, src, alt, link }) => {
  if (!display) return null;

  return (
    <Link href={link || "#"} passHref>
      <Image
        src={src}
        alt={alt}
        width={45}
        height={45}
        className="mt-2 cursor-pointer rounded-full transition-all hover:scale-105"
      />
    </Link>
  );
};

export default ImagePass;
