import React from "react";
import HeroSection from "../components/hero/HeroSection";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full mx-auto px-6 lg:px-32 overflow-clip">
      <div
        className="absolute flex -top-[300%] -left-[300%] bottom-0 right-0 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(123,255,190, 1) 0%, rgba(123,255,190, 0.5) 50%, rgba(123,255,190, 0.15) 50%, rgba(123,255,190, 0), rgba(123,255,190, 0), transparent, transparent)`,
        }}
      />
      <div className="z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default AboutPage;
