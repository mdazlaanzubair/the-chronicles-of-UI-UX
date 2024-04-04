import React from "react";
import Figure from "../generic/Figure";
import Button from "../generic/Button";
import contactImage from "@/public/other/contact-img.jpg";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="relative w-full flex flex-row-reverse items-center justify-between gap-10 my-10 lg:my-16"
    >
      <div className="w-full md:w-2/3 lg:mb-10">
        <h1 className="font-cabin text-4xl leading-snug text-secondary font-extrabold mb-3">
          Thank you for your time
        </h1>
        <h2 className="text-base text-secondary leading-relaxed tracking-normal font-semibold mb-3">
          If you have a question, project idea, or just wanted to say hello?
        </h2>
        <p className="text-sm leading-relaxed tracking-normal font-semibold mb-3">
          Shoot me an email if you want to connect! You can also connect by
          scheduling a video call to discuss your goals and ideas.
        </p>
        <div className="flex items-center gap-3">
          <Button label="Email" />
          <button
            className={`flex gap-3 whitespace-nowrap font-semibold text-xs text-primary hover:text-secondary py-3 pb-[.6rem] rounded-lg`}
          >
            Know more about me
          </button>
        </div>
      </div>
      <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
        <Figure
          caption="Feel free to contact"
          tag="Good Bye"
          size="w-[300px] h-[300px]"
          src={contactImage.src}
        />
      </div>
    </section>
  );
};

export default ContactSection;
