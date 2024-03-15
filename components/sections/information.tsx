import { Separator } from "@/components/ui/separator";
import Section from "@/components/ui/section";

const InformationSection = () => (
    <Section title="Information">
        <div className="p-3 bg-gray-50 rounded flex flex-col gap-3">
            <div className="flex flex-row w-full justify-between">
                <p className="text-sm font-light">Standort</p>
                <p className="text-sm">Wallertheim, Deutschland</p>
            </div>
            <Separator />
            <div className="flex flex-row w-full justify-between">
                <p className="text-sm font-light">Erfahrung</p>
                <p className="text-sm">10+ Jahre</p>
            </div>
            <Separator />
            <div className="flex flex-row w-full justify-between">
                <p className="text-sm font-light">Verfügbarkeit</p>
                <p className="text-sm">Projekte, Vollzeit, Teilzeit</p>
            </div>
        </div>
    </Section>
);

export default InformationSection;
