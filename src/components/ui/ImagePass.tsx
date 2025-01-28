import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImagePassProps {
  shouldHideImage?: boolean;
  src: string;
  alt: string;
  link?: string;
}

/**
 * ImagePass is a reusable React component that conditionally renders an image inside a clickable link.
 * If the `shouldHideImage` prop is set to `true`, the image is hidden; otherwise, it is displayed with hover effects.
 *
 * Props:
 * @param {boolean} [shouldHideImage=false] - Determines whether the image should be hidden. If true, the component returns null.
 * @param {string} src - The source URL of the image to be displayed.
 * @param {string} alt - The alternative text for the image, important for accessibility and SEO.
 * @param {string} [link="#"] - An optional hyperlink for the image. Defaults to "#" if no link is provided.
 *
 * The component uses Next.js's Image and Link components for optimized image handling and navigation.
 * The image has a hover effect that slightly enlarges it and is styled with TailwindCSS.
 */

const ImagePass: React.FC<ImagePassProps> = ({
  shouldHideImage = false,
  src,
  alt,
  link,
}) => {
  if (shouldHideImage) return null;

  return (
    <Link href={link ?? "#"} passHref>
      <Image
        src={src}
        alt={alt}
        width={45}
        height={45}
        priority
        className="mt-2 cursor-pointer rounded-full transition-all hover:scale-105"
      />
    </Link>
  );
};

export default ImagePass;
