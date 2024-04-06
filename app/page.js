import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/project/ProjectSection";
import WorkSection from "./components/work/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto px-6 lg:px-32 overflow-clip">
      <div
        className="absolute flex -top-[300%] -left-[300%] bottom-0 right-0 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(254,239,159, 1) 0%, rgba(254,239,159, 0.5) 50%, rgba(254,239,159, 0.15) 50%, rgba(254,239,159, 0), rgba(254,239,159, 0), transparent, transparent)`,
        }}
      />
      <div className="z-10">
        <HeroSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
