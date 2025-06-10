import { motion } from "framer-motion";

const commandContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const commandTypeVariant = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween", // Not really needed because adding a duration will force "tween"
      ease: "easeInOut",
    },
  },
};

const lineContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 10,
      damping: 5,
    },
  },
};

const LoadingTerminal = ({
  setShowLoader,
}: {
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const commands = [
    {
      id: "01",
      prefix: "$",
      cmd: "whois mdazlaanzubair",
      className: "text-secondary text-[14px] font-medium tracking-wider",
      resp: [
        {
          id: "02",
          prefix: ">",
          text: "Muhammad Azlaan Zubair is a Software Engineer",
          className: "text-info text-[12px] font-light tracking-wider",
        },
        {
          id: "03",
          prefix: ">",
          text: "Currently working as Frontend Developer",
          className: "text-info text-[12px] font-light tracking-wider",
        },
      ],
    },
    {
      id: "04",
      prefix: "$",
      cmd: "mdazlaanzubair --skills-list",
      className: "text-secondary text-[14px] font-medium tracking-wider",
      resp: [
        {
          id: "05",
          prefix: "✔",
          text: "Figma",
          className: "text-success text-[12px] font-light tracking-wider",
        },
        {
          id: "06",
          prefix: "✔",
          text: "HTML/CSS",
          className: "text-success text-[12px] font-light tracking-wider",
        },
        {
          id: "07",
          prefix: "✔",
          text: "Javascript",
          className: "text-success text-[12px] font-light tracking-wider",
        },
        {
          id: "08",
          prefix: "✔",
          text: "Python",
          className: "text-success text-[12px] font-light tracking-wider",
        },
        {
          id: "09",
          prefix: "✔",
          text: "Node JS",
          className: "text-success text-[12px] font-light tracking-wider",
        },
      ],
    },
    {
      id: "10",
      prefix: "$",
      cmd: "mdazlaanzubair --hobbies-list",
      className: "text-secondary text-[14px] font-medium tracking-wider",
      resp: [
        {
          id: "11",
          prefix: "ℹ",
          text: "Gaming",
          className: "text-warning text-[12px] font-light tracking-wider",
        },
        {
          id: "12",
          prefix: "ℹ",
          text: "Research and Learning",
          className: "text-warning text-[12px] font-light tracking-wider",
        },
        {
          id: "13",
          prefix: "ℹ",
          text: "Trying new tech",
          className: "text-warning text-[12px] font-light tracking-wider",
        },
      ],
    },
    {
      id: "14",
      prefix: "$",
      cmd: "mdazlaanzubair -status",
      className: "text-secondary text-[14px] font-medium tracking-wider",
      resp: [
        {
          id: "15",
          prefix: ">",
          text: "Open to work — building awesome things.",
          className: "text-success text-[12px] font-light tracking-wider",
        },
      ],
    },
  ];

  return (
    <div
      className={`
    fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center overflow-hidden bg-black/60 backdrop-blur-sm p-2
    opacity-100 z-50 transition-all ease-in-out duration-500
    `}
      onClick={() => setShowLoader(false)}
    >
      <div className="group relative w-full max-w-[500px] flex flex-wrap items-center justify-center gap-5 rounded-xl border border-base-300 overflow-hidden transition-all ease-in-out duration-300">
        <motion.div
          layout
          variants={commandContainerVariant}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          initial="hidden"
          animate="visible"
          className="bg-slate-900 w-full h-auto rounded-xl p-3 flex flex-col items-center justify-center gap-3 overflow-hidden"
        >
          <div className="bg-slate-950 w-full h-auto flex items-center justify-start rounded-full overflow-hidden p-2">
            <span
              className="w-3 h-3 bg-red-400 rounded-full mx-1 hover:bg-red-500 cursor-pointer"
              onClick={() => setShowLoader(false)}
            ></span>
            <span className="w-3 h-3 bg-yellow-400/40 rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-green-400/40 rounded-full mx-1"></span>
          </div>
          <div className="w-full h-auto bg-slate-950 flex flex-col items-center justify-start rounded-xl overflow-hidden p-2">
            {commands.map((command, index) => (
              <motion.pre layout key={index} className="w-full h-auto px-2">
                <code className={`flex flex-col w-full h-auto`}>
                  <p className={command.className + " w-full h-auto mb-1"}>
                    <motion.span layout variants={commandContainerVariant}>
                      {command.prefix}{" "}
                    </motion.span>
                    {command.cmd.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={commandTypeVariant}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </p>
                  <motion.ul layout variants={lineContainerVariant}>
                    {command.resp.map((resp, idx) => (
                      <motion.li
                        layout
                        key={idx}
                        variants={lineVariants}
                        className={resp.className + " mb-1"}
                      >
                        {resp.prefix + " " + resp.text}
                      </motion.li>
                    ))}
                  </motion.ul>
                </code>
              </motion.pre>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingTerminal;
