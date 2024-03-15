import { Inter } from "next/font/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InformationSection from "@/components/sections/information";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import CVSection from "@/components/sections/cv";
import EducationSection from "@/components/sections/education";
import Section from "@/components/ui/section";
import BlogSection from "@/components/sections/blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <BlogSection />;
}
