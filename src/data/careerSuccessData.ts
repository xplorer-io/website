import { PathwayToSuccessRoutes } from "@/constants/routes";

export type careerData = {
  id: number;
  title: string;
  image: string;
  bulletPoints: string[];
  url: string;
};

export const careerSuccessData: careerData[] = [
  {
    id: 1,
    title: "Crafting an impressive CV",
    image: "./illustrations/craft-your-resume.svg",
    url: PathwayToSuccessRoutes.craftingCV,
    bulletPoints: [
      "Crafting a standout resume",
      "Writing persuasive cover letters",
    ],
  },
  {
    id: 2,
    title: "Launching your career",
    image: "./illustrations/launch-your-career.svg",
    bulletPoints: ["Job Search techniques", "Networking", "Interview Skills"],
    url: PathwayToSuccessRoutes.launchingYourCareer,
  },
  {
    id: 3,
    title: "Personal Branding",
    image: "./illustrations/personal-branding.svg",
    bulletPoints: ["Blogs", "Portfolio", "Online Presence", "LinkedIn"],
    url: PathwayToSuccessRoutes.launchingYourCareer,
  },
  {
    id: 4,
    title: "Success Stories",
    image: "./illustrations/success-stories.svg",
    bulletPoints: [
      "Profiles of Successful xplorers Alumni",
      "In-Depth Career Journeys",
      "Key Takeaways and lesson learned",
    ],
    url: PathwayToSuccessRoutes.successStories,
  },
  {
    id: 5,
    title: "Excellence for students",
    image: "./illustrations/excellence-for-success.svg",
    bulletPoints: [
      "Proven Study Methods",
      "Optimizing time management",
      "Securing Valuable interships",
      "Leverage certification and career advancement",
    ],
    url: PathwayToSuccessRoutes.excellenceForSuccess,
  },
];
