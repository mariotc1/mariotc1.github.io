import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { StackSection } from "@/components/stack/StackSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectShowcase />
      <StackSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
