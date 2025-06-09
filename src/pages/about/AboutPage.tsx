import { motion } from "framer-motion";
import about_img5 from "../../assets/other/about-img-5.png";
import about_img6 from "../../assets/other/about-img-6.png";
import about_img7 from "../../assets/other/about-img-7.png";
import FloatingDocs from "../../components/FloatingDocs";
import { ImSteam } from "react-icons/im";
import { SiCodefresh } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { useEffect } from "react";
import { smoothScroller } from "../../utils/pageScrollers";
import {
  childVariantFadeIn,
  pageTransitionVariants,
  parentVariantFadeIn,
} from "../../utils/animationVarients";

const AboutPage = () => {
  const navList = [
    {
      title: "Gaming Dreams",
      sectionId: "become-gamer-section",
      icon: <ImSteam />,
    },
    {
      title: "Basit's Advice",
      sectionId: "become-programmer-section",
      icon: <GiBrain />,
    },
    {
      title: "Spare Time",
      sectionId: "free-time-section",
      icon: <SiCodefresh />,
    },
  ];

  // hit top on page reload
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <motion.section
      id="about-page"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
      >

        <motion.div
          id="become-gamer-section"
          variants={childVariantFadeIn}
          className={`flex flex-col items-center justify-center gap-3`}
        >
          <p className="flex w-full items-center justify-start text-[10px] text-base-content/60 gap-3">
            <strong className="px-2 py-1 rounded text-base-content bg-base-100 border-2 border-base-300 uppercase font-bold">
              Caption
            </strong>
            <span className="mt-px mb-px font-semibold">
              Wanted to become pro-gamer
            </span>
          </p>
          <div className="ring-2 ring-base-300 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-center object-cover"
              src={about_img7}
              alt="about section image"
            />
          </div>
        </motion.div>
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg overflow-hidden"
        >
          <h1 className="text-[14px] font-semibold">
            The Dream of becoming a gamer
          </h1>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            I was born and raised in{" "}
            <span className="text-base-content">Karachi, Pakistan</span> with no
            clear interests except for gaming. Growing up, gaming was my entire
            world. I spent countless hours exploring the sprawling landscapes of{" "}
            <a
              href="https://www.rockstargames.com/games/vicecity"
              target="_blank"
              className="link link-accent"
            >
              GTA: Vice City
            </a>{" "}
            and mastering tactical maneuvers in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Project_I.G.I."
              target="_blank"
              className="link link-accent"
            >
              Project I.G.I.
            </a>
          </p>

          <p className="text-base-content/50 text-[14px] font-medium">
            These virtual adventures weren't just fun; they ignited a passion
            for competition.{" "}
            <a
              href="https://store.steampowered.com/app/10/CounterStrike/"
              target="_blank"
              className="link link-accent"
            >
              Counter-Strike
            </a>{" "}
            became my new obsession, and I dreamed of joining the ranks of
            legendary players like{" "}
            <span className="text-base-content">Device</span>,{" "}
            <span className="text-base-content">Neo</span>, and{" "}
            <span className="text-base-content">Niko</span>{" "}
            <em>(my personal CS hero!)</em>. I practiced relentlessly,
            strategizing and honing my skills, all with the goal of becoming a{" "}
            <span className="text-base-content">pro-gamer</span>.
          </p>
        </motion.div>

        <motion.div
          id="become-programmer-section"
          variants={childVariantFadeIn}
          className={`flex flex-col items-center justify-center gap-3`}
        >
          <p className="flex w-full items-center justify-start text-[10px] text-base-content/60 gap-3">
            <strong className="px-2 py-1 rounded text-base-content bg-base-100 border-2 border-base-300 uppercase font-bold">
              Caption
            </strong>
            <span className="mt-px mb-px font-semibold">
              Programming As Professional
            </span>
          </p>
          <div className="ring-2 ring-base-300 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-center object-cover"
              src={about_img6}
              alt="about section image"
            />
          </div>
        </motion.div>
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg overflow-hidden"
        >
          <h1 className="text-[14px] font-semibold">
            Journey from gaming to programming
          </h1>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            Everything changed thanks to a friend named{" "}
            <a
              href="https://www.linkedin.com/in/b4basitali/"
              target="_blank"
              className="link link-accent"
            >
              Basit
            </a>
            . One day, he told me about a mass training program for{" "}
            <span className="text-base-content">mobile</span> and{" "}
            <span className="text-base-content">web development</span> offered
            by{" "}
            <a
              href="https://saylaniwelfare.com/services/education/technical-education/saylani-mass-it-training"
              target="_blank"
              className="link link-accent"
            >
              Saylani Welfare
            </a>
            .
          </p>

          <p className="text-base-content/50 text-[14px] font-medium my-2">
            Now, coding was a complete mystery to me at the time. But hey, free
            education? Why not? Little did I know, that decision would spark a
            whole new passion within me.
          </p>

          <p className="text-base-content/50 text-[14px] font-medium my-2">
            So, I enrolled in the{" "}
            <span className="text-base-content">BS program</span> at{" "}
            <a
              href="https://ilmauniversity.edu.pk/"
              target="_blank"
              className="link link-accent"
            >
              Ilma University
            </a>
            , determined to build a solid foundation in software engineering.
            There, I immersed myself in learning various web development tools,
            mastering them to craft incredible experiences for the web.
          </p>
        </motion.div>

        <motion.div
          id="free-time-section"
          variants={childVariantFadeIn}
          className={`flex flex-col items-center justify-center gap-3`}
        >
          <p className="flex w-full items-center justify-start text-[10px] text-base-content/60 gap-3">
            <strong className="px-2 py-1 rounded text-base-content bg-base-100 border-2 border-base-300 uppercase font-bold">
              Caption
            </strong>
            <span className="mt-px mb-px font-semibold">
              Learning never stops
            </span>
          </p>
          <div className="ring-2 ring-base-300 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-center object-cover"
              src={about_img5}
              alt="about section image"
            />
          </div>
        </motion.div>
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg overflow-hidden"
        >
          <h1 className="text-[14px] font-semibold">
            How I spent most of my time
          </h1>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            When I'm not coding away, you'll find me diving headfirst into the
            ever-evolving world of tech. Devouring articles about the latest
            innovations keeps me inspired.
          </p>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            I'm always eager to explore new web tools that can help me craft
            even better experiences. But it's not all work and no play. A touch
            of creativity sneaks in too I love experimenting with AI art using{" "}
            <a
              href="https://leonardo.ai/"
              target="_blank"
              className="link link-accent"
            >
              Leonardo AI
            </a>
            , the results can be truly mind-blowing!
          </p>

          <p className="text-base-content/50 text-[14px] font-medium my-2">
            Of course, the competitive fire still burns. Whether it's battling
            in a classic game of{" "}
            <a
              href="https://www.counter-strike.net/cs2"
              target="_blank"
              className="link link-accent"
            >
              Counter-Strike 2
            </a>{" "}
            or a cerebral battle of wits on{" "}
            <a
              href="https://www.chess.com/member/mdazlaanzubair"
              target="_blank"
              className="link link-accent"
            >
              Chess
            </a>
            , I thrive on friendly competition that keeps my mind sharp and
            agile.
          </p>
        </motion.div>

        <FloatingDocs navList={navList} />
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
