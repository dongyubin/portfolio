import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import HeroSection from "@/sections/hero-section";
import ProjectSection from "@/sections/project-section";
import TechSection from "@/sections/tech-section";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "文武科技社",
  description:
    "一个有科技感的个人博客.",
  keywords:
    "文武科技社, 文武科技柜, 文武科技资源, 文武微信排版, front-end, HTML, CSS, JavaScript",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden text-center">
      <HeroSection id="Hero"/>

      <AboutSection id="About"/>

      <TechSection id="Tech"/>

      <ProjectSection id="Projects"/>

      <ContactSection id="Contact"/>
    </main>
  );
}
