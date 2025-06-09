import { motion } from "framer-motion";
import type { JSX } from "react";
import type { Project } from "./projects-interface";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../../../../utils/animationVarients";

export const ProjectOverview = ({ project }: { project: Project }) => (
  <div className="flex flex-col items-start justify-start gap-3 p-5 bg-base-100 rounded-lg border border-base-300">
    <motion.div
      variants={parentVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        variants={childVariantFadeIn}
        className="text-[32px] font-bold"
      >
        {project.title}
      </motion.h1>
      <motion.h3
        variants={childVariantFadeIn}
        className="text-[18px] font-normal"
      >
        {project.subTitle}
      </motion.h3>
    </motion.div>

    {project.details.overview.projectDesc.length > 0 && (
      <div className="flex flex-col w-full items-start justify-start gap-3 h-auto">
        <motion.div
          variants={parentVariantFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col w-full col-span-2"
        >
          <motion.h1
            variants={childVariantFadeIn}
            className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed"
          >
            Project Overview
          </motion.h1>
          {project.details.overview.projectDesc.map((para, index) => (
            <motion.p
              key={index}
              variants={childVariantFadeIn}
              className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed ${
                project.details.overview.projectDesc.length === index + 1
                  ? ""
                  : "mb-3"
              }`}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    )}

    <motion.h1
      variants={parentVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed"
    >
      Key features:
    </motion.h1>
    {project.details.features.length > 0 && (
      <motion.ul
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col w-full col-span-2 gap-3 px-5"
      >
        {project.details.features.map((feature, index) => (
          <motion.li
            variants={childVariantFadeIn}
            key={index}
            className="flex flex-col w-full h-auto gap-1"
          >
            <h3 className="text-[12px] lg:text-[14px] font-semibold text-base-content tracking-tight leading-snug">
              {`${feature.title}`}
            </h3>
            <p className="text-[11px] lg:text-[12px] font-normal text-base-content/60 tracking-tight leading-relaxed">
              {feature.desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    )}
  </div>
);

export const ImageDisplay = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    variants={childVariantFadeIn}
    className="w-full h-[356px] max-h-[356px] col-span-2 rounded-2xl overflow-hidden border-4 border-base-100"
  >
    <img
      className="w-full h-full object-cover"
      src={src}
      alt={alt}
      title={alt}
    />
  </motion.div>
);

interface InfoTagsProps {
  title: string;
  value: string | null;
  icon?: JSX.Element;
  isTwoColumn?: boolean | null;
}

export const InfoTags: React.FC<InfoTagsProps> = ({
  icon,
  title,
  value,
  isTwoColumn,
}) => (
  <motion.div
    variants={childVariantFadeIn}
    className={`${
      isTwoColumn ? "col-span-2" : "col-span-1"
    } p-5 flex items-center gap-3 bg-base-100 rounded-lg border border-base-300`}
  >
    {icon}
    <div className="flex flex-col">
      <span className="text-[12px] font-medium text-base-content/60 uppercase">
        {title}
      </span>
      <span className="text-[12px] lg:text-[14px] font-medium text-base-content">
        {value}
      </span>
    </div>
  </motion.div>
);

export const InfoTagsLink: React.FC<InfoTagsProps> = ({
  icon,
  title,
  value,
}) => (
  <motion.div
    variants={childVariantFadeIn}
    className="col-span-1 p-5 flex items-center gap-3 bg-base-100 rounded-lg border border-base-300"
  >
    {icon}
    <div className="flex flex-col">
      <span className="text-[12px] font-medium text-base-content/60 uppercase">
        {title}
      </span>

      {value && value.length > 0 ? (
        <a
          href={value ? value : "#no-link"}
          className={`text-[12px] lg:text-[14px] link link-accent font-medium no-underline`}
        >
          Click here
        </a>
      ) : (
        <span
          className={`text-[12px] lg:text-[14px] text-base-content font-medium`}
        >
          No Live Url
        </span>
      )}
    </div>
  </motion.div>
);
