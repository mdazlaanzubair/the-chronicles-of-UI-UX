import React from "react";
import profile_pic from "../assets/profile.jpeg";
import FancyButton from "./FancyButton";
import { FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import SectionHeader from "./SectionHeader";

type Props = {};

const ServicesSection = (props: Props) => {
  const navigate = useNavigate();
  const services_list = [
    {
      id: 1,
      title: "Design",
      desc: "Craft user-centric interfaces that represent your brand.",
    },
    {
      id: 2,
      title: "Development",
      desc: "Develop websites that deliver a smooth UX across all devices.",
    },

    {
      id: 3,
      title: "Scraping",
      desc: "Extract valuable data efficiently and ethically to support smart decisions.",
    },
    {
      id: 4,
      title: "Consulting",
      desc: "Offer guidance to improve your workflows, and tech choices.",
    },
  ];

  return (
    <>
      <SectionHeader id="services-section-head" title="To be precise, I do" />
      <section
        id="services-section-body"
        className="w-full h-auto grid grid-cols-2 gap-2 auto-rows-[150px] cursor-text"
      >
        {services_list.map((service) => (
          <div
            key={service.id}
            className={`group relative col-span-1 w-full h-auto flex flex-col items-center justify-center p-5 
            bg-base-100 rounded-lg border-4 border-base-300 overflow-hidden
            ${
              service.id === 1
                ? "rounded-br-none"
                : service.id === 2
                ? "rounded-bl-none"
                : service.id === 3
                ? "rounded-tr-none"
                : service.id === 4
                ? "rounded-tl-none"
                : ""
            }`}
          >
            <div className="absolute top-0 left-0 w-fit flex items-center justify-center gap-2 bg-base-300 rounded-br-lg py-1 px-3 transition-all ease-in-out duration-300">
              <small className="text-[14px] font-semibold text-base-content/50 pb-1 group-hover:text-base-content transition-all ease-in-out duration-300">
                {service.title}
              </small>
            </div>
            <h3 className="text-[15px] font-light text-base-content/50 mt-5 group-hover:text-base-content/70 transition-all ease-in-out duration-300">
              {service.desc}
            </h3>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesSection;
