import { motion } from "framer-motion";
import { childVariantFadeIn } from "../../../utils/animationVarients";

const LoadingTerminal = () => {
  const lines = [
    { prefix: "$", text: "whois mdazlaanzubair", className: "text-secondary" },
    { prefix: ">", text: "Muhammad Azlaan Zubair", className: "text-warning" },
    { prefix: "ℹ", text: "Software Engineer graduate", className: "text-info" },
    {
      prefix: "ℹ",
      text: "Working as Frontend Developer",
      className: "text-info",
    },
    { prefix: "", text: "", className: "text-success" },
    {
      prefix: "$",
      text: "mdazlaanzubair --skills-list",
      className: "text-secondary",
    },
    { prefix: "✔", text: "Javascript", className: "text-success" },
    { prefix: "✔", text: "Python", className: "text-success" },
    { prefix: "✔", text: "Node JS", className: "text-success" },
    { prefix: "", text: "", className: "text-success" },
    {
      prefix: "$",
      text: "mdazlaanzubair --hobbies-list",
      className: "text-secondary",
    },
    { prefix: "ℹ", text: "Gaming", className: "text-info" },
    { prefix: "ℹ", text: "Research and Learning", className: "text-info" },
    { prefix: "ℹ", text: "Trying new tech", className: "text-info" },
    { prefix: "", text: "", className: "text-success" },
    {
      prefix: "$",
      text: "mdazlaanzubair -status",
      className: "text-secondary",
    },
    {
      prefix: ">",
      text: "Open to work — building awesome things.",
      className: "text-success",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger the animation of each line
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Stagger the animation of each character
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`
    fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center overflow-hidden bg-black/60 backdrop-blur-sm p-2
    opacity-100 z-50 transition-all ease-in-out duration-500
    `}
    >
      <div className="group relative w-full max-w-[500px] flex flex-wrap items-center justify-center gap-5 rounded-xl border border-base-300 p-5 overflow-hidden transition-all ease-in-out duration-300">
        <motion.div
          variants={childVariantFadeIn}
          className="mockup-code bg-slate-800 w-full h-auto rounded-xl"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {lines.map((line, index) => (
              <motion.pre
                key={index}
                data-prefix={line.prefix}
                className={line.className}
                variants={lineVariants}
              >
                <motion.code variants={textVariants}>
                  {line.text.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={charVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.code>
              </motion.pre>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingTerminal;
