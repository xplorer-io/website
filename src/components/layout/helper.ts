import { githubLink, linkedInLink, slackLink } from "@/constants";

export const menus = [
  { name: "Home", href: "/", isProtected: false },
  { name: "About Us", href: "/about-us", isProtected: false },
  { name: "Accolades", href: "/accolades", isProtected: true },
  { name: "Blogs", href: "/blogs", isProtected: false },
  { name: "Events", href: "/events", isProtected: false },
  {
    name: "Pathway To Success",
    href: "/pathway-to-success",
    isProtected: true,
  },
];

export const socialLinkList = [
  {
    href: githubLink,
    src: "github_jpoeyq",
    alt: "GithubIcon,",
    ariaLabel: "GithubIcon",
  },
  {
    href: linkedInLink,
    src: "linkedin_uqfbnv",
    alt: "LinkedIn Icon",
    ariaLabel: "LinkedIn",
  },
  {
    href: slackLink,
    src: "slack_l5moxv",
    alt: "Slack Icon,",
    ariaLabel: "slackIcon",
  },
];
