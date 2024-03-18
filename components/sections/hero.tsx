import { Download } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import SkillBadge from "@/components/ui/skillbadge";

const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "GraphQL",
    "Git",
    "Go",
    "CI/CD",
] as string[];

const HeroSection = () => {
    return (
        <Card>
            <div className="w-full aspect-video relative overflow-clip">
                <Image
                    src="/cover.jpg"
                    alt="Next.js Logo"
                    width={1280}
                    height={1010}
                    className="w-full absolute"
                />
                <div className="bg-gradient-to-t from-card absolute size-full" />
                <Image
                    src="/pp.jpg"
                    alt="Marvin Neumann"
                    width={1920}
                    height={1080}
                    className="rounded-full w-20 h-20 border-2 border-white absolute bottom-4 left-4"
                />
            </div>
            <div className="p-4 flex flex-col">
                <div className="flex flex-row gap-4 items-center">
                    <h1 className="font-medium">Marvin Neumann</h1>
                    <div className="size-1.5 bg-green-400 outline outline-4 outline-green-100 rounded-full" />
                </div>
                <div className="flex flex-row gap-2 items-center text-sm font-light">
                    <p>Full Stack Developer</p>
                    <svg
                        viewBox="0 0 2 2"
                        width="3"
                        height="3"
                        aria-hidden="true"
                        className="lb"
                    >
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <p>DE</p>
                </div>
            </div>
            <div className="m-2 mt-0 p-3 bg-gray-50 rounded flex flex-col gap-3">
                <p className="text-sm font-light">
                    Full Stack Developer mit mehr als 10 Jahren Erfahrung in der
                    Entwicklung von Webanwendungen. Fachkundig in React,
                    Node.js, TypeScript und GraphQL.
                </p>
                <div className="flex flex-row gap-1 flex-wrap">
                    {skills.map((skill) => (
                        <SkillBadge key={skill} text={skill} />
                    ))}
                </div>
                <Button
                    className="gap-2 w-full bg-blue-700 hover:bg-blue-800"
                    onClick={() => window.open("/resume.pdf")}
                >
                    CV herunterladen
                    <Download size={16} />
                </Button>
            </div>
        </Card>
    );
};

export default HeroSection;
