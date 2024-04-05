import React from "react";
import IconSlider from "../generic/IconSlider";
import { techLogosArrayComplete } from "@/app/utils/iconExporter";
import Figure from "../generic/Figure";
import heroImg from "@/public/other/hero-img.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full flex flex-col items-center justify-between py-10 lg:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 z-10">
        <div className="w-full md:w-2/3">
          <div className="inline-flex items-center gap-3 bg-base-300/80 px-3 py-2 rounded-lg cursor-pointer mb-5">
            <span className="inline-block bg-accent w-2 h-2 rounded-full shadow-2xl shadow-accent animate-pulse" />
            <span className="text-accent font-bold text-xs uppercase mr-3 mt-px">
              Open to work
            </span>
          </div>
          <h1 className="font-display text-4xl leading-snug text-secondary font-extrabold mb-8">
            Hello! Let&apos;s peek into my digital corner!
          </h1>
          <p className="text-sm leading-relaxed tracking-normal font-semibold mb-3">
            I&apos;m Azlaan, a full-stack developer based in Karachi, constantly
            pushing the boundaries of web development. I offer{" "}
            <span className="text-secondary">User-Centric Solutions</span> with{" "}
            <span className="text-secondary">Pixel-Powered Innovation</span>.
          </p>
          <p className="text-sm leading-relaxed tracking-normal font-semibold">
            My interest in AI allows me to craft innovative solutions that{" "}
            <span className="text-secondary">leverage AI</span> to enhance{" "}
            <span className="text-secondary">UX</span> &amp;{" "}
            <span className="text-secondary">functionality</span>.
          </p>
          <br />
        </div>
        <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
          <Figure
            src={heroImg.src}
            size="w-[400px] h-[300px]"
            caption="Hello World"
            tag="_<"
          />
        </div>
      </div>
      <IconSlider icons={techLogosArrayComplete} />
    </section>
  );
};

export default HeroSection;
