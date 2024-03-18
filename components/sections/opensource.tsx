import React from "react";
import Section from "../ui/section";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const framework = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Vercel",
    "MDX",
    "ESLint",
    "Prettier",
] as string[];

const OpenSourceSection = () => {
    return (
        <Section title="Open Source">
            <div className="p-3 bg-gray-50 rounded flex flex-col gap-3 hover:bg-gray-100 duration-200">
                <div className="flex flex-row gap-4 p-2">
                    <Image
                        src="/github.webp"
                        alt="GitHub"
                        width={48}
                        height={48}
                        className="rounded-full size-12"
                    />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row w-full justify-between">
                            <p className="font-medium">MIT License</p>
                        </div>

                        <p className="text-sm font-light pt-2">
                            Dieses Portfolio ist Open Source. Sie können es
                            verwenden, um Ihr eigenes Portfolio zu erstellen
                            oder es zu erweitern, um Ihre eigenen Bedürfnisse zu
                            erfüllen.
                        </p>

                        <Link
                            className="flex flex-row gap-2 items-center hover:opacity-80 text-blue-800 pt-2"
                            href="https://github.com/MarNeumann/portfolio"
                            target="_blank"
                        >
                            <LinkIcon size={16} />
                            <p className="text-sm">github.com/MarNeumann</p>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default OpenSourceSection;
