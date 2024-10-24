type BlogPost = {
  id: string;
  date: string;
  tags: string[];
  title: string;
  image: string;
  description: string;
  authorName: string;
  authorImage: string;
};

const createBlogPost = (
  id: string,
  date: string,
  tags: string[],
  title: string,
  image: string,
  description: string,
  authorName: string,
  authorImage: string,
): BlogPost => ({
  id,
  date,
  tags,
  title,
  image,
  description,
  authorName,
  authorImage,
});

export const blogPosts = [
  createBlogPost(
    "1",
    "June 10, 2024",
    ["Technology", "Programming"],
    "Introduction to React Hooks",
    "https://res.cloudinary.com/dumkkicev/image/upload/v1729746902/React_illustration_ppum94.svg",
    "Learn how to use React Hooks to manage state and side effects in functional components.",
    "John Doe",
    "https://res.cloudinary.com/dumkkicev/image/upload/v1729746902/React_illustration_ppum94.svg",
  ),
  createBlogPost(
    "2",
    "June 5, 2024",
    ["Design", "UI/UX"],
    "Best Practices for Responsive Web Design",
    "https://res.cloudinary.com/dumkkicev/image/upload/v1729746902/Responsiveness_SVG_from_unDraw_jxpzbs.svg",
    "Explore the best practices and techniques for creating responsive web designs that work across devices.",
    "Jane Smith",
    "https://res.cloudinary.com/dumkkicev/image/upload/v1729746902/Responsiveness_SVG_from_unDraw_jxpzbs.svg",
  ),
  createBlogPost(
    "3",
    "June 15, 2024",
    ["Technology", "AI"],
    "The Future of Artificial Intelligence",
    "https://res.cloudinary.com/dumkkicev/image/upload/v1729746901/AI_Research_ljvoyd.svg",
    "An in-depth look at the future of AI and how it's transforming various industries.",
    "Alice Johnson",
    "https://res.cloudinary.com/dumkkicev/image/upload/v1729746901/AI_Research_ljvoyd.svg",
  ),
];
