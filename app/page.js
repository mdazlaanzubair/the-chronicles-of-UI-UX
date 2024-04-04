import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/project/ProjectSection";
import WorkSection from "./components/work/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto px-6 lg:px-32 overflow-clip">
      <div
        className="absolute hidden lg:flex -top-[230%] -left-[230%] bottom-0 right-0"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.35) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)`,
        }}
      />
      <div
        className="absolute flex lg:hidden -top-[230%] -left-[500%] bottom-0 right-0"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)`,
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
