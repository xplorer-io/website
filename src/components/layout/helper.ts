import { githubLink, linkedInLink, slackLink } from "@/constants/links";
import githubIcon from "@public/icons/github.svg";
import linkedinIcon from "@public/icons/linkedin.svg";
import slackIcon from "@public/icons/slack.svg";

export const menus = [
  { name: "Home", href: "/", isProtected: false },
  { name: "About Us", href: "/about-us", isProtected: false },
  { name: "Accolades", href: "/accolades", isProtected: true },
  { name: "Blogs", href: "/blogs", isProtected: false },
  { name: "Events", href: "/events", isProtected: false },
  { name: "Xplorer's AI", href: "/xplorers-ai" },
  {
    name: "Pathway To Success",
    href: "/pathway-to-success",
    isProtected: true,
  },
];

export const socialLinkList = [
  {
    href: githubLink,
    src: githubIcon,
    alt: "GithubIcon,",
    ariaLabel: "GithubIcon",
  },
  {
    href: linkedInLink,
    src: linkedinIcon,
    alt: "LinkedIn Icon",
    ariaLabel: "LinkedIn",
  },
  {
    href: slackLink,
    src: slackIcon,
    alt: "Slack Icon,",
    ariaLabel: "slackIcon",
  },
];
