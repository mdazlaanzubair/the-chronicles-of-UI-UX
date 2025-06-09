import { motion } from "framer-motion";
import { CgDesignmodo } from "react-icons/cg";
import { services_list } from "../../../utils/constant_export";
import SectionHeader from "../../../components/SectionHeader";
import { IoCodeWorking } from "react-icons/io5";
import { SiConsul, SiGoogledataproc } from "react-icons/si";
import {
  childVariantReveal,
  parentVariantReveal,
} from "../../../utils/animationVarients";

const ServicesSection = () => {
  return (
    <>
      <SectionHeader
        id="services-section-head"
        title="Capabilities"
        mode="dark"
      />
      <motion.section
        id="services-section-body"
        variants={parentVariantReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full h-auto grid grid-cols-2 gap-3 cursor-text"
      >
        {services_list.map((service) => (
          <motion.div
            key={service.id}
            variants={childVariantReveal}
            className={`group relative col-span-1 w-full h-auto flex flex-col items-center justify-center py-5 px-3 
            bg-base-100 rounded-lg border border-base-300 overflow-hidden
            `}
          >
            <div className="p-3 bg-base-200 rounded-box mb-3 shadow">
              {service.id == 1 ? (
                <CgDesignmodo className="text-3xl" />
              ) : service.id == 2 ? (
                <IoCodeWorking className="text-3xl" />
              ) : service.id == 3 ? (
                <SiGoogledataproc className="text-3xl" />
              ) : (
                <SiConsul className="text-3xl" />
              )}
            </div>
            <h2 className="text-[16px] font-semibold text-base-content text-center mb-2">
              {service.title}
            </h2>
            <h3 className="text-[12px] font-extralight text-base-content/50 text-center">
              {service.desc}
            </h3>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default ServicesSection;
