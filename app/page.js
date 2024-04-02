import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/project/ProjectSection";
import WorkSection from "./components/work/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto">
      <HeroSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
