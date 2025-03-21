"use client";

import React from "react";
import Figure from "../generic/Figure";
import Button from "../generic/Button";
import contactImage from "@/public/other/contact-img.jpg";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.23,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const ContactSection = () => {
  const router = useRouter();

  return (
    <motion.section
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      id="contact-section"
      className="relative w-full flex flex-row-reverse items-center justify-between gap-10 my-10 lg:my-16"
    >
      <div className="w-full md:w-2/3">
        <motion.h1
          variants={contentVariants}
          className="font-display text-4xl lg:text-6xl leading-snug text-secondary font-extrabold mb-5"
        >
          Say hello!
        </motion.h1>
        <motion.h2
          variants={contentVariants}
          className="text-base text-secondary leading-relaxed tracking-normal font-semibold mb-3"
        >
          If you have a question, project idea, or wanted to say hello?{" "}
          <a
            className="underline underline-offset-4 text-accent"
            href="mailto:mdazlaan1996@gmail.com?subject=Hi%20There!&body=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact."
          >
            Just shoot me an email
          </a>
          !
        </motion.h2>
        <motion.p
          variants={contentVariants}
          className="text-base leading-relaxed tracking-normal font-semibold mb-10"
        >
          You can also connect by scheduling a video call to discuss your goals
          &amp; ideas.
        </motion.p>
        <motion.div
          variants={contentVariants}
          className="flex items-center gap-3"
        >
          <Button label="About me" onClick={() => router.push("/about")} />
          <a
            className={`flex gap-3 whitespace-nowrap font-semibold text-xs text-primary hover:text-accent py-3 pb-[.6rem] rounded-lg transition-all ease-in-out duration-300`}
            href="https://calendly.com/mdazlaanzubair/virtual-interaction"
            target="_blank"
          >
            Book a call
          </a>
        </motion.div>
      </div>
      <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
        <Figure
          caption="Feel free to contact"
          size="w-[300px] h-[300px]"
          src={contactImage.src}
        />
      </div>
    </motion.section>
  );
};

export default ContactSection;
