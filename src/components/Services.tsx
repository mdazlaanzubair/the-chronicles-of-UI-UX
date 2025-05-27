import { services_list } from "../utils/constant_export";
import SectionHeader from "./SectionHeader";

const ServicesSection = () => {

  return (
    <>
      <SectionHeader
        id="services-section-head"
        title="To be precise, I do"
        mode="dark"
      />
      <section
        id="services-section-body"
        className="w-full h-auto grid grid-cols-2 gap-2 auto-rows-[150px] cursor-text"
      >
        {services_list.map((service) => (
          <div
            key={service.id}
            className={`group relative col-span-1 w-full h-auto flex flex-col items-center justify-center p-5 
            bg-base-100 rounded-lg border-4 border-base-300/30 overflow-hidden hover:border-base-content transition-all ease-in-out duration-1000
            `}
          >
            <div className="absolute top-0 left-0 w-fit flex items-center justify-center gap-2 bg-base-300/30 group-hover:bg-base-content rounded-br-lg py-1 px-3 transition-all ease-in-out duration-1000">
              <small className="text-[14px] font-semibold text-base-content/50 pb-1 group-hover:text-base-100 transition-all ease-in-out duration-1000">
                {service.title}
              </small>
            </div>
            <h3 className="text-[15px] font-extralight text-base-content/50 mt-5 group-hover:text-base-content transition-all ease-in-out duration-500">
              {service.desc}
            </h3>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesSection;
