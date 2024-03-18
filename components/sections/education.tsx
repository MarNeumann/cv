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
    linkShorthand: string;
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
            "Durch meine Ausbildung zum Fachinformatiker (Anwendungsentwicklung) bei der Aareal Bank AG erhielt ich einen umfassenden Einblick in die Anforderungen und Prozesse eines internationalen Konzerns. Ich habe meine Ausbildung verkürzt und erfolgreich abgeschlossen.",
        linkShorthand: "aareal-bank.com",
        link: "https://aareal-bank.com",
    },
    {
        image: "/kit.png",
        title: "Wirtschaftsinformatik",
        subtitle: "Studium",
        company: "Karlsruher Institut für Technologie",
        location: "Karlsruhe, Deutschland",
        date: "2019 - 2021",
        description:
            "Nach meinem Abitur habe ich mich für ein Studium der Wirtschaftsinformatik am Karlsruher Institut für Technologie (KIT) entschieden. Während meines Studiums habe ich mich auf die Entwicklung von Webanwendungen und die Anwendung von KI-Technologien spezialisiert. Nach 4 Semestern habe ich mich dazu entschieden, mein Studium abzubrechen und mich auf praxisnähere Inhalte zu konzentrieren.",
        linkShorthand: "kit.edu",
        link: "https://kit.edu",
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
                        linkShorthand={education.linkShorthand}
                    />
                ))}
            </div>
        </Section>
    );
};

export default EducationSection;
