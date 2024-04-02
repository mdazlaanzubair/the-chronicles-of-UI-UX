import React from "react";
import IconSlider from "../generic/IconSlider";
import { techLogosArrayComplete, toolKit } from "@/app/utils/iconExporter";
import Figure from "../generic/Figure";
import SpotLight from "../generic/SpotLight";

const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-between gap-5 my-10 lg:my-16">
      <SpotLight
        top="-top-[150%]"
        left="-left-[150%]"
        opacity="0.3"
        spread="1%"
      />
      <div className="flex flex-row items-center justify-between gap-5">
        <div className="w-2/3">
          <div className="inline-flex items-center gap-1 bg-base-300 p-1 rounded-sm cursor-pointer mb-5">
            <div className="inline-block rounded-full  animate-pulse">
              <span className="block bg-accent w-1 h-1 rounded-full m-1" />
            </div>
            <span className="text-accent font-bold text-[8px] uppercase mr-3 mt-px">
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
      <div className="flex flex-col w-full">
        <h2 className="text-base text-center leading-relaxed tracking-wide font-semibold mb-5">
          My toolkit for web crafting
        </h2>
        <IconSlider icons={techLogosArrayComplete} />
      </div>
    </div>
  );
};

export default HeroSection;
