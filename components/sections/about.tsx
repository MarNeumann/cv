import Section from "@/components/ui/section";
import { Link, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => (
    <Section title="Über mich">
        <div className="p-3 bg-gray-50 rounded flex flex-col gap-3">
            <p className="text-sm font-light">
                Ich bin leidenschaftlich daran interessiert, Technologie
                einzusetzen, um reale Probleme zu lösen. Ich suche stets nach
                neuen Wegen, um die Benutzererfahrung zu verbessern und Software
                für jedermann zugänglicher zu machen. Ich bin auch ein starker
                Befürworter von Open-Source-Software und bin immer bereit, zur
                Gemeinschaft beizutragen.
            </p>
            <Separator />
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-row gap-2 items-center hover:opacity-80">
                    <Link size={16} />
                    <p className="text-sm">marvinneumann.com</p>
                </div>
                <div className="flex flex-row gap-2 items-center hover:opacity-80">
                    <Mail size={16} />
                    <p className="text-sm">mail@marvinneumann.com</p>
                </div>
            </div>
        </div>
    </Section>
);

export default AboutSection;
