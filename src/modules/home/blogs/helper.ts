export type BlogCardProps = {
  name: string;
  date: string;
  writer_image: string;
  title: string;
  description: string;
  type: string;
  image: string;
};
export const BlogList: BlogCardProps[] = [
  {
    name: "Emily Johnson",
    date: "2024-07-15",
    writer_image: "emily_johnson_image_url.jpg",
    title: "Building a Community with Open Source Projects",
    description:
      "Tips and strategies for building a thriving community around open source projects.",
    type: "COMMUNITY",
    image: "http://kubernetes.io/",
  },
  {
    name: "Michael Brown",
    date: "2024-06-30",
    writer_image: "michael_brown_image_url.jpg",
    title: "Building a Community with Open Source Projects",
    description:
      "An in-depth look at serverless architecture and its benefits for modern applications.",
    type: "PRODUCT",
    image: "http://kubernetes.io/",
  },
  {
    name: "Linda Davis",
    date: "2024-06-20",
    writer_image: "linda_davis_image_url.jpg",
    title: "Building a Community with Open Source Projects",
    description:
      "Best practices for ensuring security in open source projects.",
    type: "OPENSOURCE",
    image: "http://kubernetes.io/",
  },

  {
    name: "Jane Smith",
    date: "2024-07-25",
    writer_image: "jane_smith_image_url.jpg",
    title: "Latest Trends in Cloud Computing",
    description:
      "An overview of the latest trends and advancements in cloud computing technology.",
    type: "PRODUCT",
    image: "http://kubernetes.io/",
  },
  {
    name: "Robert Wilson",
    date: "2024-06-10",
    writer_image: "robert_wilson_image_url.jpg",
    title: "Engaging with the Tech Community",
    description:
      "Effective ways to engage and contribute to the tech community.",
    type: "COMMUNITY",
    image: "http://kubernetes.io/",
  },
  {
    name: "John Doe",
    date: "2024-08-01",
    writer_image: "john_doe_image_url.jpg",
    title: "Introduction to Kubernetes",
    description:
      "A comprehensive guide to getting started with Kubernetes for container orchestration.",
    type: "OPENSOURCE",
    image: "http://kubernetes.io/",
  },
];
