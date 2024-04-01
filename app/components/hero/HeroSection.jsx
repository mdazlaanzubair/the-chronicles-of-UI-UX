import React from "react";
import IconSlider from "../generic/IconSlider";
import { toolKit } from "@/app/utils/iconExporter";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-1 bg-base-300 p-3 rounded-lg cursor-pointer mb-14">
          <div className="inline-block rounded-full  animate-pulse">
            <span className="block bg-accent w-2 h-2 rounded-full m-1" />
          </div>
          <span className="text-accent font-bold text-xs uppercase mr-3">
            Open to work
          </span>
        </div>
        <h1 className="text-5xl leading-snug text-secondary font-semibold mb-8">
          Hello! Let&apos;s peek into my digital corner!
        </h1>
        <p className="text-base leading-relaxed tracking-wide font-semibold mb-3">
          I&apos;m Azlaan, a{" "}
          <span className="text-secondary">full-stack developer</span> based in{" "}
          <span className="text-secondary">Karachi</span>, constantly pushing
          the boundaries of web development. I offer{" "}
          <span className="text-secondary">User-Centric Solutions</span> with{" "}
          <span className="text-secondary">Pixel-Powered Innovation</span>.
        </p>
        <p className="text-base leading-relaxed tracking-wide font-semibold mb-8">
          My interest in AI allows me to craft{" "}
          <span className="text-secondary">innovative solutions</span> that{" "}
          <span className="text-secondary">leverage AI</span> to enhance{" "}
          <span className="text-secondary">UX</span> &amp;{" "}
          <span className="text-secondary">functionality</span>.
        </p>
        <h2 className="text-base leading-relaxed tracking-wide font-semibold mb-5">
          My toolkit for web crafting
        </h2>
        <br />
        <IconSlider icons={toolKit} />
      </div>
      <div className="hidden lg:flex">asd</div>
    </div>
  );
};

export default HeroSection;
