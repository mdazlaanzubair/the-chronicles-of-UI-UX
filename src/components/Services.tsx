import React from "react";
import profile_pic from "../assets/profile.jpeg";
import FancyButton from "./FancyButton";
import { FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

type Props = {};

const ServicesSection = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <section
        id="services-section-head"
        className="w-full h-auto flex flex-col justify-between px-10 py-5 bg-base-100 rounded-2xl"
      >
        <h1 className="text-[14px] font-medium text-base-content/60 text-center">
          My Offerings
        </h1>
      </section>
      <section
        id="services-section-body"
        className="w-full h-auto flex flex-col justify-between px-10 py-5 bg-base-100 rounded-2xl"
      >
        <h1 className="text-[32px] font-medium my-3">
          Hello &amp; welcome to my digital corner!
        </h1>
        <p className="text-base-content/60 text-[16px]">
          I&apos;m Azlaan, a full-stack developer based in Karachi, constantly
          pushing the boundaries of web development. I offer{" "}
          <span className="text-base-content">User-Centric Solutions</span> with{" "}
          <span className="text-base-content">Pixel-Powered Innovation</span>.
        </p>
        {/* <p className="text-base-content/60 text-[16px]">
        My interest in AI allows me to craft innovative solutions that{" "}
        <span className="text-base-content">leverage AI</span> to enhance{" "}
        <span className="text-base-content">UX</span> &amp;{" "}
        <span className="text-base-content">functionality</span>.
      </p> */}

        <span className="my-3"></span>

        <div className="w-fit h-auto flex flex-wrap gap-3">
          <FancyButton
            className={
              "w-30 btn-ghost bg-base-content text-base-100 border-transparent"
            }
            onClick={() =>
              window.open(
                "https://calendly.com/mdazlaanzubair/virtual-interaction/",
                "_blank"
              )
            }
            text_1={"Let's talk"}
            icon_1={<FaArrowRightLong className="text-sm" />}
            text_2={"Book a call"}
            icon_2={<FaPhone className="text-sm" />}
          />
          <FancyButton
            className={
              "w-30 btn-ghost bg-base-100 text-base-content border-transparent shadow-none"
            }
            onClick={() => navigate("/about")}
            text_1={"Explore more"}
            text_2={"About me"}
          />
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
