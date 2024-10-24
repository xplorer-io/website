import { githubLink, linkedInLink, slackLink } from "@/constants";
import githubIcon from "@public/icons/github.svg";
import linkedinIcon from "@public/icons/linkedin.svg";
import slackIcon from "@public/icons/slack.svg";

export const menus = [
  { name: "Home", href: "/", isProtected: false },
  { name: "About Us", href: "/about-us", isProtected: false },
  { name: "Accolades", href: "/accolades", isProtected: true },
  { name: "Blogs", href: "/blogs", isProtected: false },
  { name: "Events", href: "/events", isProtected: false },
  {
    name: "Pathway To Success",
    href: "/pathway-to-success",
    isProtected: false,
  },
];

export const socialLinkList = [
  {
    href: githubLink,
    src: "https://res.cloudinary.com/dumkkicev/image/upload/q_auto,fl_sanitize/v1729578485/github_jpoeyq.svg",
    alt: "GithubIcon,",
    ariaLabel: "GithubIcon",
  },
  {
    href: linkedInLink,
    src: "https://res.cloudinary.com/dumkkicev/image/upload/v1729578493/linkedin_uqfbnv.svg",
    alt: "LinkedIn Icon",
    ariaLabel: "LinkedIn",
  },
  {
    href: slackLink,
    src: "https://res.cloudinary.com/dumkkicev/image/upload/v1729578500/slack_l5moxv.svg",
    alt: "Slack Icon,",
    ariaLabel: "slackIcon",
  },
];

// https://res.cloudinary.com/dumkkicev/image/upload/q_auto,f_auto/v1729578485/github_jpoeyq.svg
