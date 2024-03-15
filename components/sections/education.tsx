import { Briefcase, MapPin, Calendar, Link, GraduationCap } from "lucide-react";
import React from "react";
import SkillBadge from "@/components/ui/skillbadge";
import Image from "next/image";
import Section from "@/components/ui/section";
import ResumeCard from "../ui/resume-card";

interface Education {
    image: string;
    title: string;
    subtitle: string;
    company: string;
    location: string;
    date: string;
    description: string;
    link: string;
}

const education = [
    {
        image: "/aareal.jpg",
        title: "Fachinformatiker (Anwendungsentwicklung)",
        subtitle: "Ausbildung",
        company: "Aareal Bank AG",
        location: "Wiesbaden, Deutschland",
        date: "2021 - 2023",
        description:
            "Als freiberuflicher Softwareentwickler entwickle ich Webanwendungen für Kunden des deutschen Mittelstands. Ich bin spezialisiert auf die Entwicklung von benutzerfreundlichen und skalierbaren Webanwendungen. Ich arbeite eng mit meinen Kunden zusammen, um ihre Anforderungen zu verstehen und maßgeschneiderte Lösungen zu realisieren.",
        link: "aareal-bank.de",
    },
    {
        image: "/kit.png",
        title: "Wirtschaftsinformatik",
        subtitle: "Studium",
        company: "Karlsruher Institut für Technologie (KIT)",
        location: "Karlsruhe, Deutschland",
        date: "2019 - 2021",
        description:
            "Als freiberuflicher Softwareentwickler entwickle ich Webanwendungen für Kunden des deutschen Mittelstands. Ich bin spezialisiert auf die Entwicklung von benutzerfreundlichen und skalierbaren Webanwendungen. Ich arbeite eng mit meinen Kunden zusammen, um ihre Anforderungen zu verstehen und maßgeschneiderte Lösungen zu realisieren.",
        link: "kit.edu",
    },
] as Education[];

const EducationSection = () => {
    return (
        <Section title="Bildungsweg">
            <div className="flex flex-col gap-1">
                {education.map((education, index) => (
                    <ResumeCard
                        key={index}
                        image={education.image}
                        title={education.title}
                        subtitle={education.subtitle}
                        company={education.company}
                        location={education.location}
                        date={education.date}
                        description={education.description}
                        link={education.link}
                    />
                ))}
            </div>
        </Section>
    );
};

export default EducationSection;
