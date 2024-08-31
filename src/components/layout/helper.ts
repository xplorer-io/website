import { githubLink, linkedInLink, slackLink } from "@/constants";
import githubIcon from "@public/images/icons/github.svg";
import linkedinIcon from "@public/images/icons/linkedin.svg";
import slackIcon from "@public/images/icons/slack.svg";
export const menus = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Accolades", href: "/accolades" },
  { name: "Blogs", href: "/blogs" },
  { name: "Events", href: "/events" },
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
