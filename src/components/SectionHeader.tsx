import { motion } from "framer-motion";
import { childVariantFadeIn } from "../utils/animationVarients";

type Props = {
  id: string;
  title: string;
  mode?: string;
};

const SectionHeader = (props: Props) => {
  return (
    <motion.section
      id={props.id}
      variants={childVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`w-full h-auto flex flex-col justify-between px-10 py-5 
      ${
        props.mode === "light"
          ? "bg-base-content text-base-200"
          : "bg-base-100 text-base-content"
      } rounded-lg border border-base-300`}
    >
      <h1 className="text-[12px] font-medium text-center capitalize">
        {props.title}
      </h1>
    </motion.section>
  );
};

export default SectionHeader;
