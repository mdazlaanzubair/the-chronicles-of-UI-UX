import bg_img from "../assets/backgrounds/card-bg-img.jpg";
import resume from "../assets/doc/resume.pdf";
import dark_logo from "../assets/logo-dark.svg";
import light_logo from "../assets/logo-light.svg";

import { HiDocumentText } from "react-icons/hi2";
import { FaIdCard } from "react-icons/fa";
import { calculateYearCount } from "../utils/expCalculator";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../provider/DarkModeProvider";

const bio_constants = {
  experience_in_year: calculateYearCount(),
  social: {
    linkedin: {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mdazlaanzubair/",
    },
    github: {
      title: "Github",
      url: "https://github.com/mdazlaanzubair",
    },
    twitter: {
      title: "Twitter",
      url: "https://twitter.com/mdazlaanzubair",
    },
    calendly: {
      title: "Calendly",
      url: "https://calendly.com/mdazlaanzubair/virtual-interaction/",
    },
  },
};

const AboutBentoGrid = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <section
      id="about-section"
      className="relative w-full h-auto flex flex-col justify-between bg-base-200 rounded-lg"
    >
      <div className="w-full h-full grid gap-3">
        <div className="grid grid-cols-3 gap-3 auto-rows-fr">
          <div
            className={`group rounded-2xl cursor-pointer bg-base-content flex flex-col items-center justify-center overflow-clip`}
            onClick={() => navigate("/about")}
          >
            <img
              className="w-full h-full group-hover:scale-95 transition-all ease-in-out duration-300"
              src={isDarkMode ? light_logo : dark_logo}
              alt="Muhammad Azlaan Zubair Logo"
            />
          </div>
          <div
            className={`group rounded-2xl cursor-pointer bg-base-100 flex flex-col items-center justify-center text-base-content hover:text-base-content border-4 border-transparent hover:border-base-content transition-all ease-in-out duration-300`}
            onClick={() => navigate("/credentials")}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl group-hover:text-2xl transition-all ease-in-out duration-300 font-black">
                {bio_constants.experience_in_year}{" "}
                <sub className="text-xs -ml-1 font-bold">yrs.</sub>
              </span>
              <span className="text-[1px] opacity-0 font-bold text-center uppercase group-hover:text-xs group-hover:opacity-100 transition-all ease-in-out duration-300">
                experience
              </span>
            </div>
          </div>
          <div
            className={`group relative overflow-hidden row-span-2 rounded-2xl border-4 border-base-300 cursor-pointer bg-black parent flex flex-col items-center justify-center text-base-content/60 hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() => navigate("/work/side-projects")}
          >
            <img
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
              src={bg_img}
              alt="background image"
            />
            <span className="absolute top-0 left-0 right-0 bottom-0 w-full h-full text-lg [writing-mode:vertical-lr] rotate-180 flex flex-col items-center justify-center uppercase font-bold z-10 bg-black/40 text-white/60 group hover:text-white hover:bg-black/50 transition-all ease-in-out duration-300">
              Side Projects
            </span>
          </div>
          <div
            className={`group rounded-2xl cursor-pointer bg-base-100 flex flex-col items-center justify-center text-base-content border-4 border-transparent hover:border-base-content hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() => navigate("/credentials")}
          >
            <FaIdCard className="text-3xl mb-2 group-hover:text-2xl transition-all ease-in-out duration-300" />
            <span className="text-[1px] opacity-0 font-bold text-center uppercase group-hover:text-xs group-hover:opacity-100 transition-all ease-in-out duration-300">
              Credentials
            </span>
          </div>

          <div
            className={`group rounded-2xl cursor-pointer bg-base-100 flex flex-col items-center justify-center border-4 border-transparent hover:border-accent text-base-content/60 hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() =>
              window.open(bio_constants.social.calendly.url, "_blank")
            }
          >
            <div className="bento-grid-container h-[120px] flex items-center justify-center">
              <h1 className="text-[150%] font-black leading-none group-hover:scale-125 transition-all ease-in-out duration-300">
                Hire <br /> me.
              </h1>
            </div>
          </div>
          <div
            className={`group relative overflow-hidden col-span-2 rounded-2xl border-4 border-base-300 cursor-pointer parent bg-black flex flex-col items-center justify-center text-base-content/60 hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() => navigate("/work/case-studies")}
          >
            <img
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
              src={bg_img}
              alt="background image"
            />
            <span className="absolute top-0 left-0 right-0 bottom-0 w-full h-ful text-lg flex flex-col items-center justify-center uppercase font-bold z-10 bg-black/60 text-white/40 group hover:text-white hover:bg-black/50 transition-all ease-in-out duration-300">
              Work
            </span>
          </div>
          <div
            className={`group rounded-2xl cursor-pointer bg-base-100 flex flex-col items-center justify-center text-base-content border-4 border-transparent hover:border-base-content hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() => window.open(resume, "_blank")}
          >
            <HiDocumentText className="text-3xl mb-2 group-hover:text-2xl transition-all ease-in-out duration-300" />
            <span className="text-[1px] opacity-0 font-bold text-center uppercase group-hover:text-xs group-hover:opacity-100 transition-all ease-in-out duration-300">
              Resume
            </span>
          </div>
          {/* <div
            className={`group rounded-b-2xl rounded-l-2xl cursor-pointer bg-base-200 border-4 border-transparent hover:border-base-content flex flex-col items-center justify-center text-base-content/60 hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() =>
              window.open(bio_constants.social.linkedin.url, "_blank")
            }
          >
            <GrLinkedinOption className="text-3xl mb-2 group-hover:text-2xl transition-all ease-in-out duration-300" />
            <span className="text-[1px] opacity-0 font-bold text-center uppercase group-hover:text-xs group-hover:opacity-100 transition-all ease-in-out duration-300">
              {bio_constants.social.linkedin.title}
            </span>
          </div>
          <div
            className={`group rounded-b-2xl rounded-l-2xl cursor-pointer bg-base-200 border-4 border-transparent hover:border-base-content flex flex-col items-center justify-center text-base-content/60 hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() =>
              window.open(bio_constants.social.twitter.url, "_blank")
            }
          >
            <IoLogoTwitter className="text-3xl mb-2 group-hover:text-2xl transition-all ease-in-out duration-300" />
            <span className="text-[1px] opacity-0 font-bold text-center uppercase group-hover:text-xs group-hover:opacity-100 transition-all ease-in-out duration-300">
              {bio_constants.social.twitter.title}
            </span>
          </div>
          <div
            className={`group rounded-b-2xl rounded-r-2xl cursor-pointer bg-base-200 border-4 border-transparent hover:border-base-content flex flex-col items-center justify-center text-base-content/60 hover:text-base-content transition-all ease-in-out duration-300`}
            onClick={() =>
              window.open(bio_constants.social.github.url, "_blank")
            }
          >
            <TbBrandGithubFilled className="text-3xl mb-2 group-hover:text-2xl transition-all ease-in-out duration-300" />
            <span className="text-[1px] opacity-0 font-bold text-center uppercase group-hover:text-xs group-hover:opacity-100 transition-all ease-in-out duration-300">
              {bio_constants.social.github.title}
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutBentoGrid;
