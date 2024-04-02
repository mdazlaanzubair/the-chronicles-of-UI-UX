import React from "react";
import IconSlider from "../generic/IconSlider";
import { techLogosArrayComplete } from "@/app/utils/iconExporter";
import Figure from "../generic/Figure";

const ProjectSection = () => {
  return (
    <section
      id="project-section"
      className="relative w-full flex flex-col items-center justify-between gap-5 my-10 lg:my-16"
    >
      <div className="flex flex-row items-center justify-between gap-5 z-10">
        <div className="w-2/3">
          <div className="inline-flex items-center gap-3 bg-base-300/80 px-3 py-2 rounded-lg cursor-pointer mb-5">
            <span className="inline-block bg-accent w-2 h-2 rounded-full shadow-2xl shadow-accent animate-pulse" />
            <span className="text-accent font-bold text-xs uppercase mr-3 mt-px">
              Open to work
            </span>
          </div>
          <h1 className="font-cabin text-4xl leading-snug text-secondary font-extrabold mb-8">
            Hello! Let&apos;s peek into my digital corner!
          </h1>
          <p className="text-sm leading-relaxed tracking-normal font-semibold mb-3">
            I&apos;m Azlaan, a full-stack developer based in Karachi, constantly
            pushing the boundaries of web development. I offer User-Centric
            Solutions with Pixel-Powered Innovation.
          </p>
          <p className="text-sm leading-relaxed tracking-normal font-semibold">
            My interest in AI allows me to craft innovative solutions that{" "}
            <span className="">leverage AI</span> to enhance{" "}
            <span className="text-secondary">UX</span> &amp;{" "}
            <span className="text-secondary">functionality</span>.
          </p>
          <br />
        </div>
        <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
          <Figure className="" />
        </div>
      </div>
      <IconSlider icons={techLogosArrayComplete} />
    </section>
  );
};

export default ProjectSection;
