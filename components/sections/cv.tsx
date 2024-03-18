import { Briefcase, MapPin, Calendar, Link } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import SkillBadge from "../ui/skillbadge";
import Image from "next/image";
import Section from "../ui/section";
import ResumeCard from "../ui/resume-card";

const CVSection = () => {
    return (
        <Section title="Lebenslauf">
            <ResumeCard
                image="/digitaleantworten.png"
                title="Software Engineer"
                subtitle="Freiberuflich"
                company="Digitale Antworten"
                location="Wallertheim, Deutschland"
                date="2021 - Heute"
                description="Als freiberuflicher Softwareentwickler entwickle ich Webanwendungen für Kunden des deutschen Mittelstands. Ich bin spezialisiert auf die Entwicklung von benutzerfreundlichen und skalierbaren Webanwendungen. Ich arbeite eng mit meinen Kunden zusammen, um ihre Anforderungen zu verstehen und maßgeschneiderte Lösungen zu realisieren."
                linkShorthand="digitaleantworten.de"
                link="https://digitaleantworten.de"
            />
        </Section>
    );
};

export default CVSection;
