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
      <div className="w-full md:w-2/3">
        <h1 className="font-display text-4xl leading-snug text-secondary font-extrabold mb-5">
          Thank you for your time
        </h1>
        <h2 className="text-base text-secondary leading-relaxed tracking-normal font-semibold mb-3">
          If you have a question, project idea, or wanted to say hello?{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:mdazlaan1996@gmail.com?subject=Hi%20There!&body=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact."
          >
            Just shoot me an email
          </a>
          !
        </h2>
        <p className="text-base leading-relaxed tracking-normal font-semibold mb-10">
          You can also connect by scheduling a video call to discuss your goals
          &amp; ideas.
        </p>
        <div className="flex items-center gap-3">
          <Button label="About me" />
          <a
            className={`flex gap-3 whitespace-nowrap font-semibold text-xs text-primary hover:text-secondary py-3 pb-[.6rem] rounded-lg`}
            href="https://calendly.com/mdazlaanzubair/virtual-interaction"
            target="_blank"
          >
            Book a call
          </a>
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
