import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

type Props = {
  projects: {
    title: string | any;
    sub_title: string | any;
    img: string | any;
  }[];
  direction?: "right" | "left" | "up" | "down" | any;
  speed?: number | any;
  autofill?: boolean | any;
  pauseOnHover?: boolean | any;
};

export const ProjectGridSlider = (props: Props) => {
  const navigate = useNavigate();

  if (props.projects.length > 0) {
    return (
      <Marquee
        autoFill={props.autofill ?? true}
        pauseOnHover={props.pauseOnHover ?? true}
        direction={props.direction ?? "right"}
        speed={props.speed ?? 25}
      >
        <>
          {props.projects?.map(({ img, title, sub_title }, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center mx-[6px] w-fit h-fit gap-3 overflow-hidden cursor-pointer"
              onClick={() => navigate("/work")}
              title={`${title} Case Study`}
            >
              <div className="w-[189px] h-[130px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt={`${title} - ${sub_title} image`}
                  title={title}
                />
              </div>

              <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 right-0 w-full h-full p-1 flex items-center backdrop-blur-xs z-10 rounded-lg transition-all ease-in-out duration-300"></div>
              <button
                onClick={() => navigate("/work")}
                className="opacity-0 group-hover:opacity-100 absolute top-1/2 lef-1/2 group-hover:-translate-y-1/2 btn btn-xs btn-neutral z-20 transition-all ease-in-out duration-300"
                title={`${title}`}
              >
                View All
              </button>
            </div>
          ))}
        </>
      </Marquee>
    );
  }
};
