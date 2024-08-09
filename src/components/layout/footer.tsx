"use client";

import copyrightLogo from "@public/images/icons/copyright.svg";
import githubIcon from "@public/images/icons/github.svg";
import linkedinIcon from "@public/images/icons/linkedin.svg";
import slackIcon from "@public/images/icons/slack.svg";
import Image, { StaticImageData } from "next/image";
import React from "react";

// SocialLink Component
const SocialLink = ({ href, src, alt, ariaLabel }: { href: string; src: StaticImageData; alt: string; ariaLabel: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4" aria-label={ariaLabel}>
    <Image src={src} alt={alt} loading="lazy" />
  </a>
);

const Footer = React.memo(() => {
  return (
    <footer className="bg-[#283E70] p-10 mt-auto">
      <div className="flex flex-wrap justify-between items-center text-center sm:text-left">
        <div className="ml-0 sm:ml-16 mt-2 sm:mt-5">
          <h3 className="text-white text-3xl">Xplorers</h3>
        </div>
        <div className="mr-0 sm:mr-16 mt-2 sm:mt-0 text-center sm:text-right">
          <p className="text-white mb-1 sm:mb-0 mr-5">Get in touch</p>
          <div className="flex justify-center sm:justify-end items-center">
            <SocialLink href="https://github.com/xplorer-io" src={githubIcon} alt="Github Icon" ariaLabel="Github" />
            <SocialLink href="https://www.linkedin.com/company/xplorersgroup" src={linkedinIcon} alt="Linkedin Icon" ariaLabel="Linkedin" />
            <SocialLink href="https://xplorers-io.slack.com/" src={slackIcon} alt="Slack Icon" ariaLabel="Slack" />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <div className="flex justify-center items-center text-white">
          <Image src={copyrightLogo} alt="Copyright Logo" />
          <p className="ml-2">2024 Xplorers, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
