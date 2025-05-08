import React from "react";
import AboutBentoGrid from "../components/AboutBentoGrid";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <section
      id="about-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <AboutBentoGrid />
    </section>
  );
};

export default AboutPage;
