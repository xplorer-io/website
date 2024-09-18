import { githubLink, linkedInLink, slackLink } from "@/constants";
import githubIcon from "@public/images/icons/github.svg";
import linkedinIcon from "@public/images/icons/linkedin.svg";
import slackIcon from "@public/images/icons/slack.svg";

export const menus = [
  { name: "Home", href: "/" , isProtected: false},
  { name: "About Us", href: "/about-us" , isProtected: false},
  { name: "Accolades", href: "/accolades" , isProtected: true},
  { name: "Blogs", href: "/blogs" , isProtected: false},
  { name: "Events", href: "/events" , isProtected: false},
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
