import React from "react";
import Figure from "../components/generic/Figure";
import aboutImg1 from "@/public/other/about-img-1.jpg";
import aboutImg2 from "@/public/other/about-img-2.jpg";
import aboutImg3 from "@/public/other/about-img-3.jpg";
import { techLogosArrayComplete } from "../utils/iconExporter";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div
      id="about-section"
      className="flex flex-col w-full h-full mx-auto px-6 lg:px-32 overflow-hidden"
    >
      <div
        className="absolute flex -top-[300%] -left-[300%] bottom-0 right-0 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(255,93,212, 1) 0%, rgba(255,93,212, 0.5) 50%, rgba(255,93,212, 0.15) 50%, rgba(255,93,212, 0), rgba(255,93,212, 0), transparent, transparent)`,
        }}
      />
      <div className="relative w-full flex flex-col items-center justify-between py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 z-10">
          <div className="w-full md:w-2/3">
            <h1 className="font-display text-xs leading-snug tracking-wider text-secondary font-extrabold mb-2">
              WHO AM I
            </h1>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              I was born and raised in Karachi, Pakistan with no clear interests
              except for gaming. Growing up, gaming was my entire world. I spent
              countless hours exploring the sprawling landscapes of{" "}
              <Link
                href="https://www.rockstargames.com/"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Grand Theft Auto: Vice City
              </Link>{" "}
              and mastering tactical maneuvers in{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Innerloop_Studios"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Project I.G.I
              </Link>
              .
            </p>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              These virtual adventures weren&apos;t just fun; they ignited a
              passion for competition. Counter-Strike became my new obsession,
              and I dreamed of joining the ranks of legendary players like{" "}
              <span className="text-secondary">Device</span>,{" "}
              <span className="text-secondary">Neo</span>, or{" "}
              <span className="text-secondary">Niko</span> (my personal CS
              hero!). I practiced relentlessly, strategizing and honing my
              skills, all with the goal of becoming a pro gamer.
            </p>
          </div>
          <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
            <Figure
              src={aboutImg1.src}
              size="w-[400px] h-[300px]"
              caption="Wanter to become pro-gamer"
              tag="IMAGINE"
            />
          </div>
        </div>
        <Stripes
          position="right"
          rotation="rotate-45"
          isTop={true}
          isLeft={true}
        />
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5 z-10">
          <div className="w-full md:w-2/3">
            <h1 className="font-display text-xs leading-snug tracking-wider text-secondary font-extrabold mb-2">
              PRO-GAMING TO PROGRAMMING
            </h1>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              Everything changed thanks to a friend named{" "}
              <Link
                href="https://www.linkedin.com/in/b4basitali/"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Basit
              </Link>
              . One day, he told me about a mass training program for{" "}
              <span className="text-secondary">mobile</span> and{" "}
              <span className="text-secondary">web development</span> offered by{" "}
              <Link
                href="https://www.saylaniwelfare.com/en/services/education/technical-education/saylani-mass-it-training"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Saylani Welfare
              </Link>
              .
            </p>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              Now, coding was a complete mystery to me at the time. But hey,
              free education? Why not? Little did I know, that decision would
              spark a whole new passion within me.
            </p>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              So, I enrolled in the{" "}
              <span className="text-secondary">BS program</span> at{" "}
              <Link
                href="https://ilmauniversity.edu.pk/"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Ilma University
              </Link>
              , determined to build a solid foundation in software engineering.
              There, I immersed myself in learning various web development
              tools, mastering them to craft incredible experiences for the web.
            </p>
          </div>
          <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
            <Figure
              src={aboutImg2.src}
              size="w-[400px] h-[300px]"
              caption="Programming As Professional"
              tag="IMAGINE"
            />
          </div>
        </div>
        <Stripes
          position="left"
          rotation="-rotate-45"
          isTop={false}
          isLeft={false}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 z-10">
          <div className="w-full md:w-2/3">
            <h1 className="font-display text-xs leading-snug tracking-wider text-secondary font-extrabold mb-2">
              HOW DO I SPENT MY SPARE TIME
            </h1>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              When I&apos;m not coding away, you&apos;ll find me diving
              headfirst into the ever-evolving world of tech. Devouring articles
              about the latest innovations keeps me inspired.
            </p>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              I&apos;m always eager to explore new web tools that can help me
              craft even better experiences. But it&apos;s not all work and no
              play. A touch of creativity sneaks in too I love experimenting
              with AI art using{" "}
              <Link
                href="https://leonardo.ai/"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Leonardo AI
              </Link>
              , the results can be truly mind-blowing!
            </p>
            <p className="text-sm leading-relaxed tracking-normal font-medium mb-3">
              Of course, the competitive fire still burns. Whether it&apos;s
              strategizing in a classic game of{" "}
              <Link
                href="https://store.steampowered.com/app/730/CounterStrike_2/"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Counter-Strike
              </Link>{" "}
              or battling it out on{" "}
              <Link
                href="https://www.chess.com/"
                target="_blank"
                className="underline underline-offset-2 text-secondary hover:text-accent"
              >
                Chess
              </Link>
              , I find a healthy dose of competition to keep me sharp.
            </p>
          </div>
          <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
            <Figure
              src={aboutImg3.src}
              size="w-[400px] h-[300px]"
              caption="Learning never stops"
              tag="IMAGINE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const Stripes = ({
  isTop = true,
  isLeft = true,
  position = "left",
  rotation = "rotate-45",
}) => {
  return (
    <div className="my-10">
      <div
        className={`${isTop ? "top-0" : "bottom-0"} ${
          isLeft ? "left-0" : "right-0"
        } absolute w-full flex flex-col gap-1 ${rotation}`}
      >
        <Marquee
          autoFill
          direction={position}
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #fff, #fff, transparent)",
          }}
        >
          {techLogosArrayComplete?.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 p-2 flex items-center gap-1 rounded"
            >
              <img
                className="w-[16px] h-[16px]"
                src={item.src}
                alt={item?.title}
              />
              <span className="text-sm">{item?.title}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <Marquee
        autoFill
        direction={position}
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #fff, #fff, transparent)",
        }}
      >
        {techLogosArrayComplete?.map((item, index) => (
          <div
            key={index}
            className="bg-base-100 p-2 flex items-center gap-1 rounded"
          >
            <img
              className="w-[16px] h-[16px]"
              src={item.src}
              alt={item?.title}
            />
            <span className="text-sm">{item?.title}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
