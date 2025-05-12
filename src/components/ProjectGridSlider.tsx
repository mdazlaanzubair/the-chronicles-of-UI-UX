import Marquee from "react-fast-marquee";
import bg_img from "../assets/backgrounds/abstract-bg1.jpg";
import { useNavigate } from "react-router-dom";
import { toolKit } from "../utils/iconExporter";
import { MdArrowOutward } from "react-icons/md";
import SectionHeader from "./SectionHeader";

type Props = {};

const ProjectGridSlider = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <SectionHeader id="icon-section-head" title="Let's sneak a peek at my work." />
      <section
        id="icon-section"
        className="flex flex-col w-full bg-base-200 rounded-2xl"
      >
        <Marquee autoFill pauseOnHover direction="right" speed={25}>
          {toolKit?.map((logo, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center mx-[6px] w-fit h-fit gap-3 overflow-hidden"
            >
              <div className="border-4 border-base-300 w-[189px] h-[130px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={bg_img}
                  alt={logo?.title + "-logo"}
                  title={logo?.title}
                />
              </div>

              <div className="action-center absolute bottom-0 right-0 w-fit h-fit p-1 flex items-center bg-base-300 justify-center border border-base-300 rounded-tl-lg rounded-br-xl z-10">
                <button
                  onClick={() => navigate("/case-studies")}
                  className="group btn btn-sm btn-square btn-neutral"
                  title="View All"
                >
                  <MdArrowOutward className="group-hover:rotate-45 transition-all text-xl ease-in-out duration-300 font-black" />
                </button>
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default ProjectGridSlider;
