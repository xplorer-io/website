"use client";

import copyrightLogo from "@public/images/icons/copyright.svg";
import githubIcon from "@public/images/icons/github.svg";
import linkedinIcon from "@public/images/icons/linkedin.svg";
import slackIcon from "@public/images/icons/slack.svg";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/buttons/button";
import { githubLink, linkedinLink, slackLink, youtubeLink } from "./helper";

export type SocialLinkProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  ariaLabel: string;
};

// SocialLink Component
const SocialLink = ({ href, src, alt, ariaLabel }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mr-4"
    aria-label={ariaLabel}
  >
    <Image src={src} alt={alt} loading="lazy" />
  </a>
);

const Footer = React.memo(() => {
  return (
    <footer className="mt-auto bg-[#283E70] p-10">
      <div className="container mx-auto grid grid-cols-3 justify-between text-center sm:text-left">
        <div className="col-span-2 mr-20 mt-2 sm:mt-5">
          <h3 className="text-3xl text-white">Xplorers</h3>
        </div>
        <div className="mr-0 mt-2 sm:mr-16 sm:mt-0 sm:text-right">
          <p className="mb-1 mr-5 text-white sm:mb-0">Get in touch</p>
          <div className="flex items-center justify-end py-3">
            <SocialLink
              href={githubLink}
              src={githubIcon}
              alt="Github Icon"
              ariaLabel="Github"
            />
            <SocialLink
              href={linkedinLink}
              src={linkedinIcon}
              alt="Linkedin Icon"
              ariaLabel="Linkedin"
            />
            <SocialLink
              href={slackLink}
              src={slackIcon}
              alt="Slack Icon"
              ariaLabel="Slack"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center text-white">
          <Image src={copyrightLogo} alt="Copyright Logo" />
          <p className="ml-2">2024 Xplorers, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
