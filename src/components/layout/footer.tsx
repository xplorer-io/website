"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { socialLinkList } from "./helper";
import Link from "next/link";

// SocialLink Component
const SocialLink = ({
  href,
  src,
  alt,
  ariaLabel,
}: {
  href: string;
  src: string;
  alt: string;
  ariaLabel: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mr-4"
    aria-label={ariaLabel}
  >
    <CldImage
      src={src}
      alt={alt}
      width={20}
      height={20}
      loading="lazy"
      format="svg"
    />
  </a>
);

const Footer = React.memo(() => {
  return (
    <footer className="mt-auto bg-[#283E70] p-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-1 text-center md:justify-between">
          <div>
            <Link href="/">
              <CldImage
                src="https://res.cloudinary.com/dumkkicev/image/upload/v1729741206/xplorer_logo_white_ppbnio.svg"
                height={140}
                width={140}
                alt="xplorers-logo"
                format="svg"
              />
            </Link>
          </div>
          <div className="flex text-white">
            <span>&copy;</span>
            <p className="ml-2">2024 Xplorers, All rights reserved</p>
          </div>
          <div className="mr-0 mt-2 text-center sm:mt-0">
            <p className="mb-1 mr-5 font-semibold text-white">Get in touch</p>
            <div className="flex items-center justify-center sm:justify-end">
              {socialLinkList?.map(({ href, src, alt, ariaLabel }) => (
                <SocialLink key={alt} {...{ href, src, alt, ariaLabel }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
