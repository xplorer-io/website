import React from 'react';

// TODO fix when api is ready
const post =
    {
        date: "June 10, 2024",
        tags: ["Technology", "Programming"],
        title: "Introduction to React Hooks",
        image: "https://via.placeholder.com/400x200",
        description: `
            <p>React Hooks have revolutionized how we manage state and side effects in React functional components. Introduced in React 16.8, Hooks provide a more direct API for working with component state, context, refs, and more, all without needing to write a class component.</p>
            
            <p>They allow us to reuse stateful logic between components, making our code more modular and easier to understand. </p>
            
            <p>In this comprehensive guide to React Hooks, we'll explore the fundamental Hooks like <code>useState</code> and <code>useEffect</code>, which enable us to manage component state and perform side effects respectively. We'll dive deep into the rules of Hooks, their lifecycle, and how they can simplify complex component logic.</p>
            
            <p>Furthermore, we'll cover advanced Hooks like <code>useContext</code> for accessing React context, <code>useRef</code> for accessing DOM elements and keeping references between renders, and <code>useReducer</code> for managing more complex state logic.</p>
            
            <p>We'll discuss custom Hooks, which allow us to extract reusable logic into functions that can be shared across components, promoting code reuse and cleaner architecture.</p>
            
            <p>By the end of this tutorial, you'll have a solid understanding of how to leverage React Hooks to build more maintainable, scalable, and efficient React applications. Whether you're new to React or looking to refactor existing class-based components, this guide will equip you with the knowledge and tools to take full advantage of React Hooks in your projects.</p>
        `,
        authorName: "John Doe",
        authorImage: "https://via.placeholder.com/50",
    }


// TODO dummy page (Needs properly formatted page that accepts WYSIWYG)
const BlogPost = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4">
                <img src={post.image} alt={post.title} className="rounded-lg" />
            </div>
            <div className="mb-4">
                <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                <div className="flex items-center mb-2">
                    <img src={post.authorImage} alt={post.authorName} className="h-8 w-8 rounded-full mr-2" />
                    <span className="text-gray-700">{post.authorName}</span>
                </div>
                <div className="text-gray-600 mb-2">{post.date}</div>
                <div className="flex mb-4">
                    {post.tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 text-gray-700 rounded-full py-1 px-2 text-sm mr-2">
              {tag}
            </span>
                    ))}
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.description }} className="prose" />
            </div>
        </div>
    );
};

export default BlogPost;
