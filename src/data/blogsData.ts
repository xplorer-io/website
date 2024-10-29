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
    "React_illustration_ppum94",
    "Learn how to use React Hooks to manage state and side effects in functional components.",
    "John Doe",
    "React_illustration_ppum94",
  ),
  createBlogPost(
    "2",
    "June 5, 2024",
    ["Design", "UI/UX"],
    "Best Practices for Responsive Web Design",
    "Responsiveness_SVG_from_unDraw_jxpzbs",
    "Explore the best practices and techniques for creating responsive web designs that work across devices.",
    "Jane Smith",
    "Responsiveness_SVG_from_unDraw_jxpzbs",
  ),
  createBlogPost(
    "3",
    "June 15, 2024",
    ["Technology", "AI"],
    "The Future of Artificial Intelligence",
    "AI_Research_ljvoyd",
    "An in-depth look at the future of AI and how it's transforming various industries.",
    "Alice Johnson",
    "AI_Research_ljvoyd",
  ),
];
