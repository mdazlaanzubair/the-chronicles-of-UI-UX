import FancyButton from "./FancyButton";
import { FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

type Props = {};

const HeroSection = (props: Props) => {
  const navigate = useNavigate();

  return (
    <section
      id="hero-section"
      className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg border-4 overflow-hidden border-base-300"
    >
      <div className="absolute top-0 left-0 w-fit flex items-center justify-center gap-2 bg-base-300 rounded-br-lg py-1 px-3">
        <div className="inline-grid *:[grid-area:1/1] mb-1">
          <div className="status status-sm status-accent animate-ping"></div>
          <div className="status status-sm status-accent"></div>
        </div>
        <small className="text-[10px] font-medium text-base-content pb-1">
          Welcome to my digital corner
        </small>
      </div>

      <h1 className="text-[32px] font-medium my-3">
        Hello &amp; welcome to my digital corner!
      </h1>
      <p className="text-base-content/60 text-[16px] font-light">
        I&apos;m Azlaan, a full-stack developer based in{" "}
        <span className="text-base-content font-medium">Karachi, Pakistan</span>
        , constantly pushing the boundaries of web development. I offer{" "}
        <span className="text-base-content font-medium">
          User-Centric Solutions
        </span>{" "}
        with{" "}
        <span className="text-base-content font-medium">
          Pixel-Powered Innovation
        </span>
        .
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
            "w-30 btn-ghost bg-base-content text-base-100 border-transparent shadow-none"
          }
          onClick={() =>
            window.open(
              "https://calendly.com/mdazlaanzubair/virtual-interaction/",
              "_blank"
            )
          }
          text_1={"Let's talk"}
          icon_1={<FaPhone className="text-sm" />}
          text_2={"Book a call"}
          icon_2={<FaArrowRightLong className="text-sm" />}
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
  );
};

export default HeroSection;
