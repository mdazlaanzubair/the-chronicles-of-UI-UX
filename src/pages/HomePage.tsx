import HeroSection from "../components/Hero";
import IconSlider from "../components/IconSlider";
import { toolKit } from "../utils/iconExporter";
import ProjectGridSlider from "../components/ProjectGridSlider";
import ServicesSection from "../components/Services";

const HomePage = () => {
  return (
    <section
      id="home-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <HeroSection />
      <IconSlider icons={toolKit} />
      <ProjectGridSlider
        title="Let's sneak a peek at my work."
        sectionID="case-study-section-head"
        direction="right"
      />
      <ServicesSection />
    </section>
  );
};

export default HomePage;
