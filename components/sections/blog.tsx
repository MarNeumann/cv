import React from "react";
import Section from "@/components/ui/section";
import BlogCard from "@/components/ui/blog-card";

interface Post {
    title: string;
    date: string;
    content: string;
    link: string;
}

const posts = [
    {
        title: "How to build a blog with Next.js",
        date: "2021-08-12",
        content:
            "A guide to building a blog with Next.js and MDX. Learn how to create a blog with Next.js and MDX. This guide will show you how to create a blog with Next.js and MDX.",
        link: "Read more",
    },
    {
        title: "How to build a blog with Next.js",
        date: "2021-08-12",
        content:
            "A guide to building a blog with Next.js and MDX. Learn how to create a blog with Next.js and MDX. This guide will show you how to create a blog with Next.js and MDX.",
        link: "Read more",
    },
    {
        title: "How to build a blog with Next.js",
        date: "2021-08-12",
        content:
            "A guide to building a blog with Next.js and MDX. Learn how to create a blog with Next.js and MDX. This guide will show you how to create a blog with Next.js and MDX.",
        link: "Read more",
    },
    {
        title: "How to build a blog with Next.js",
        date: "2021-08-12",
        content:
            "A guide to building a blog with Next.js and MDX. Learn how to create a blog with Next.js and MDX. This guide will show you how to create a blog with Next.js and MDX.",
        link: "Read more",
    },
    {
        title: "How to build a blog with Next.js",
        date: "2021-08-12",
        content:
            "A guide to building a blog with Next.js and MDX. Learn how to create a blog with Next.js and MDX. This guide will show you how to create a blog with Next.js and MDX.",
        link: "Read more",
    },
    {
        title: "How to build a blog with Next.js",
        date: "2021-08-12",
        content:
            "A guide to building a blog with Next.js and MDX. Learn how to create a blog with Next.js and MDX. This guide will show you how to create a blog with Next.js and MDX.",
        link: "Read more",
    },
] as Post[];

const BlogSection = () => {
    return (
        <Section title="Blog">
            <div className="flex flex-col gap-2">
                {posts.map((post, index) => (
                    <BlogCard
                        key={index}
                        title={post.title}
                        date={post.date}
                        content={post.content}
                        link={post.link}
                    />
                ))}
            </div>
        </Section>
    );
};

export default BlogSection;
