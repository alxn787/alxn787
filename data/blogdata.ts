
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with React",
    excerpt: "Explore the latest patterns and best practices for building scalable React applications in 2024.",
    content: `
# Building Modern Web Applications with React

React has evolved significantly over the years, and 2024 brings new patterns and best practices that can help you build better applications.

## Key Concepts

### 1. Component Composition
Component composition is at the heart of React development. By breaking down your UI into smaller, reusable components, you can create more maintainable and testable code.

### 2. State Management
Modern React applications benefit from thoughtful state management. Whether you're using useState, useReducer, or external libraries like Zustand, the key is to keep your state predictable and easy to debug.

### 3. Performance Optimization
React provides several tools for performance optimization, including React.memo, useMemo, and useCallback. Use these judiciously to prevent unnecessary re-renders.

## Best Practices

- Keep components small and focused
- Use TypeScript for better developer experience
- Implement proper error boundaries
- Write tests for critical functionality

Building modern React applications is about finding the right balance between simplicity and functionality.
    `,
    image: "/placeholder.svg",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: "2",
    title: "The Future of TypeScript",
    excerpt: "Discover what's coming next in TypeScript and how it will shape the future of web development.",
    content: `
# The Future of TypeScript

TypeScript continues to evolve, bringing new features that make development more enjoyable and productive.

## Upcoming Features

### 1. Better Type Inference
The TypeScript team is constantly improving type inference, making it easier to write type-safe code without explicit annotations.

### 2. Performance Improvements
New versions focus on compilation speed and memory usage improvements.

### 3. Enhanced Developer Experience
Better error messages and IDE integration make TypeScript more accessible to developers.

## Why TypeScript Matters

TypeScript provides:
- Static type checking
- Better IDE support
- Improved refactoring capabilities
- Enhanced code documentation

The future of web development is strongly typed, and TypeScript is leading the way.
    `,
    image: "/placeholder.svg",
    date: "2024-01-10",
    readTime: "4 min read",
    tags: ["TypeScript", "Programming", "Developer Tools"]
  },
  {
    id: "3",
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques that every developer should know.",
    content: `
# Mastering CSS Grid and Flexbox

Modern CSS layout techniques have revolutionized how we build responsive web interfaces.

## CSS Grid

CSS Grid is perfect for two-dimensional layouts:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Flexbox

Flexbox excels at one-dimensional layouts:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## When to Use Each

- **Grid**: Complex layouts, two-dimensional control
- **Flexbox**: Simple layouts, one-dimensional control

Understanding both techniques will make you a more effective frontend developer.
    `,
    image: "/placeholder.svg",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Frontend"]
  }
];

// Function to simulate adding a new blog post
export const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
  const newPost: BlogPost = {
    ...post,
    id: (blogPosts.length + 1).toString()
  };
  blogPosts.push(newPost);
  return newPost;
};

// Function to get a blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
