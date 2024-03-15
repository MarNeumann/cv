import AboutSection from "@/components/sections/about";
import CVSection from "@/components/sections/cv";
import EducationSection from "@/components/sections/education";
import HeroSection from "@/components/sections/hero";
import InformationSection from "@/components/sections/information";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="max-w-screen-sm xl:max-w-screen-xl mx-auto p-4 xl:px-32">
                <div className="flex flex-col xl:flex-row gap-4">
                    <div className="flex flex-col gap-4 xl:w-1/3">
                        <HeroSection />
                        <AboutSection />
                        <InformationSection />
                    </div>
                    <div className="xl:w-2/3">
                        <Tabs defaultValue="cv" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-card">
                                <TabsTrigger value="cv">Resume</TabsTrigger>
                                <TabsTrigger value="blog">Blog</TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="cv"
                                className="flex flex-col gap-4"
                            >
                                <CVSection />
                                <EducationSection />
                            </TabsContent>
                            <TabsContent value="blog">{children}</TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
        </>
    );
}
