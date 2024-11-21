import xplorersLogoWhite from "@public/logos/xplorers-logo-white.svg";
import Image from "next/image";
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
    <Image src={src} alt={alt} loading={"lazy"} />
  </a>
);

const Footer = React.memo(() => {
  return (
    <footer className="mt-auto bg-[#283E70] p-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-1 text-center md:justify-between">
          <div>
            <Link href="/">
              <Image src={xplorersLogoWhite} alt="Xplorers Logo white " />
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
