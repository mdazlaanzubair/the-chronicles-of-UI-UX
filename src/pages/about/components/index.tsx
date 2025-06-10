import { motion } from "framer-motion";
import { childVariantFadeIn } from "../../../utils/animationVarients";

type Props = {
  id: string;
  caption: string;
  image: string;
};

export const ImagePreview = (props: Props) => {
  return (
    <motion.div
      id={props.id}
      variants={childVariantFadeIn}
      className={`flex flex-col items-center justify-center gap-3`}
    >
      <p className="flex w-full items-center justify-start text-[10px] text-base-content/60 gap-3">
        <strong className="px-2 py-1 rounded text-base-content bg-base-100 border-2 border-base-300 uppercase font-bold">
          Caption
        </strong>
        <span className="mt-px mb-px font-semibold">{props.caption}</span>
      </p>
      <div className="ring-2 ring-base-300 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-center object-cover"
          src={props.image}
          alt="about section image"
        />
      </div>
    </motion.div>
  );
};

