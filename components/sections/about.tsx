import Section from "@/components/ui/section";
import { LinkIcon, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const AboutSection = () => (
    <Section title="Über mich">
        <div className="p-3 bg-gray-50 rounded flex flex-col gap-3">
            <p className="text-sm font-light">
                Hi! Hier ist Marvin, ein leidenschaftlicher Full-Stack
                Entwickler und Software-Architekt aus Deutschland. Ich habe
                Erfahrung in der Entwicklung von Webanwendungen und mobilen
                Apps. Mein Interesse für Technologie und Softwareentwicklung
                begann in meiner Jugend und hat sich seitdem zu einer
                lebenslangen Leidenschaft entwickelt.
            </p>
            <Separator />
            <div className="flex flex-row flex-wrap gap-4 ">
                <Link
                    className="flex flex-row gap-2 items-center hover:opacity-80"
                    href="#"
                >
                    <LinkIcon size={16} />
                    <p className="text-sm ">marvinneumann.com</p>
                </Link>
                <Link
                    className="flex flex-row gap-2 items-center hover:opacity-80"
                    href="mailto:mail@marvinneumann.com"
                >
                    <Mail size={16} />
                    <p className="text-sm">mail@marvinneumann.com</p>
                </Link>
            </div>
        </div>
    </Section>
);

export default AboutSection;
