import Marquee from "react-fast-marquee";

import { useNavigate } from "react-router-dom";
import { case_studies } from "../utils/constant_export";
import SectionHeader from "./SectionHeader";

type Props = {
  title: string;
  sectionID: string;
  direction?: "right" | "left" | "up" | "down";
  speed?: number;
  autofill?: boolean;
  pauseOnHover?: boolean;
};

const ProjectGridSlider = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <SectionHeader id={props.sectionID} title={props.title} mode="dark" />
      <section
        id={props.sectionID + "-marquee"}
        className="flex flex-col w-full bg-base-200 rounded-2xl"
      >
        <Marquee
          autoFill={props.autofill ?? true}
          pauseOnHover={props.pauseOnHover ?? true}
          direction={props.direction ?? "right"}
          speed={props.speed ?? 25}
        >
          {case_studies?.map(({ imgSrc, title }, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center mx-[6px] w-fit h-fit gap-3 overflow-hidden cursor-pointer"
              onClick={() => navigate("/work")}
            >
              <div className="w-[189px] h-[130px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imgSrc}
                  alt={title + "-logo"}
                  title={title}
                />
              </div>

              <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 w-full h-full p-1 flex items-center bg-white/5 backdrop-blur-sm z-10 rounded-lg transition-all ease-in-out duration-300"></div>
              <button
                onClick={() => navigate("/work")}
                className="opacity-0 group-hover:opacity-100 absolute top-1/2 lef-1/2 -translate-y-1/2 btn btn-sm btn-neutral z-20 transition-all ease-in-out duration-300"
                title={`View ${title} Projects`}
              >
                View
              </button>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default ProjectGridSlider;
