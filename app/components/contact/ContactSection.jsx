import React from "react";
import Figure from "../generic/Figure";
import Button from "../generic/Button";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="relative w-full flex flex-row-reverse items-center justify-between gap-10 my-10 lg:my-16"
    >
      <div className="w-full md:w-2/3">
        <h1 className="font-cabin text-4xl leading-snug text-secondary font-extrabold mb-3">
          Thank you for your time
        </h1>
        <h2 className="text-base text-secondary leading-relaxed tracking-normal font-semibold mb-3">
          Have a question, project idea, or just want to say hello?
        </h2>
        <p className="text-sm leading-relaxed tracking-normal font-semibold mb-3">
          Shoot me an email if you want to connect! You can also connect by
          scheduling a video call to discuss your gosals and ideas.
        </p>
        <div className="flex items-center gap-3">
          <Button label="Email" />
          <Button label="Book a call" />
          <button
            className={`flex gap-3 whitespace-nowrap font-semibold text-xs text-primary hover:text-secondary py-3 pb-[.6rem] rounded-lg`}
          >
            Know more about me
          </button>
        </div>
      </div>
      <div className="hidden w-full h-full lg:w-1/2 lg:flex justify-center">
        <Figure
          caption="Ilma University"
          size="w-[350px] h-[250px]"
          src="https://ilmauniversity.edu.pk/images/main/main.jpg"
        />
      </div>
    </section>
  );
};

export default ContactSection;
