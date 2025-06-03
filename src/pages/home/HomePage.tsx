import HeroSection from "./components/HeroSection";
import IconSlider from "../../components/IconSlider";
import { toolKit } from "../../utils/iconExporter";
import ProjectGridSlider from "../../components/ProjectGridSlider";
import ServicesSection from "./components/ServicesSection";
import { case_studies } from "../../utils/constant_export";

const HomePage = () => {
  return (
    <section
      id="home-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <HeroSection />
      <IconSlider icons={toolKit} />
      <ProjectGridSlider
        title="Case Studies and Business Solution"
        sectionID="case-study-section-head"
        direction="right"
        case_studies={case_studies}
      />
      <ServicesSection />
    </section>
  );
};

export default HomePage;
