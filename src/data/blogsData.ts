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
    )
];
