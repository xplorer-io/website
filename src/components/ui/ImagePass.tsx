import React from "react";
import Image from "next/image";

interface ImagePassProps {
  display?: boolean;
  src: string;
  alt: string;
}

const ImagePass: React.FC<ImagePassProps> = ({ display, src, alt }) => {
  if (!display) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={45}
      height={45}
      className="mt-2 cursor-pointer rounded-full transition-all hover:scale-105"
    />
  );
};

export default ImagePass;
