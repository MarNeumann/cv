import React from "react";
import Section from "@/components/ui/section";
import BlogCard from "@/components/ui/blog-card";
import { Lock } from "lucide-react";

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
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-black">
                <Lock size={120} />
                <h1 className="text-lg font-bold mt-4">Kommt bald!</h1>
            </div>
            <div className="blur pointer-events-none">
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
            </div>
        </div>
    );
};

export default BlogSection;
