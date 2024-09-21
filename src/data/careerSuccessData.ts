export type CareerData = {
  id: string;
  title: string;
  image: string;
  bulletPoints: string[];
};

export const careerSuccessData: CareerData[] = [
  {
    id: "1",
    title: "Crafting an impressive CV",
    image: "./illustrations/craft-your-resume.svg",
    bulletPoints: [
      "Crafting a standout resume",
      "Writing persuasive cover letters",
    ],
  },
  {
    id: "2",
    title: "Launching your career",
    image: "./illustrations/launch-your-career.svg",
    bulletPoints: ["Job Search techniques", "Networking", "Interview Skills"],
  },
  {
    id: "3",
    title: "Personal Branding",
    image: "./illustrations/personal-branding.svg",
    bulletPoints: ["Blogs", "Portfolio", "Online Presence", "LinkedIn"],
  },
  {
    id: "4",
    title: "Success Stories",
    image: "./illustrations/success-stories.svg",
    bulletPoints: [
      "Profiles of Successful xplorers Alumni",
      "In-Depth Career Journeys",
      "Key Takeaways and lesson lerned",
    ],
  },
  {
    id: "5",
    title: "Excellence for students",
    image: "./illustrations/excellence-for-success.svg",
    bulletPoints: [
      "Proven Study Methods",
      "Optimizing time management",
      "Securing Valueable interships",
      "Leverage certification and career advacement",
    ],
  },
];
