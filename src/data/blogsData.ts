interface BlogPost {
    id: string;
    date: string;
    tags: string[];
    title: string;
    image: string;
    description: string;
    authorName: string;
    authorImage: string;
}

const createBlogPost = (id: string, date: string, tags: string[], title: string, image: string, description: string, authorName: string, authorImage: string): BlogPost => ({
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
        '1',
        "June 10, 2024",
        ["Technology", "Programming"],
        "Introduction to React Hooks",
        "https://via.placeholder.com/400x200",
        "Learn how to use React Hooks to manage state and side effects in functional components.",
        "John Doe",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    ),
    createBlogPost(
        '2',
        "June 5, 2024",
        ["Design", "UI/UX"],
        "Best Practices for Responsive Web Design",
        "https://via.placeholder.com/400x200",
        "Explore the best practices and techniques for creating responsive web designs that work across devices.",
        "Jane Smith",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    ),
    createBlogPost(
        '3',
        "June 15, 2024",
        ["Technology", "AI"],
        "The Future of Artificial Intelligence",
        "https://via.placeholder.com/400x200",
        "An in-depth look at the future of AI and how it's transforming various industries.",
        "Alice Johnson",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    ),
    createBlogPost(
        '4',
        "June 20, 2024",
        ["Programming", "JavaScript"],
        "Mastering Asynchronous JavaScript",
        "https://via.placeholder.com/400x200",
        "Understand the intricacies of asynchronous programming in JavaScript with this comprehensive guide.",
        "Bob Brown",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
    ),
    createBlogPost(
        '5',
        "June 25, 2024",
        ["Design", "Creativity"],
        "Inspiring Creativity in Web Design",
        "https://via.placeholder.com/400x200",
        "Tips and tricks to boost your creativity and design stunning websites.",
        "Charlie Davis",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
    ),
    createBlogPost(
        '6',
        "June 30, 2024",
        ["Technology", "Cybersecurity"],
        "Top Cybersecurity Trends in 2024",
        "https://via.placeholder.com/400x200",
        "Stay ahead of the curve with the latest trends and best practices in cybersecurity.",
        "Dana White",
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
    ),
];
