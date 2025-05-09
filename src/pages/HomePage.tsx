import React from "react";
import HeroSection from "../components/Hero";
import IconSlider from "../components/IconSlider";
import { toolKit } from "../utils/iconExporter";
import ProjectGridSlider from "../components/ProjectGridSlider";
import ServicesSection from "../components/Services";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <section
      id="home-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <HeroSection />
      <IconSlider icons={toolKit} />
      <ProjectGridSlider />
      <ServicesSection />
    </section>
  );
};

export default HomePage;
