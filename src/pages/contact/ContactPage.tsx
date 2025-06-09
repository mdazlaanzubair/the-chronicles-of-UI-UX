import { useEffect, useState } from "react";
import { smoothScroller } from "../../utils/pageScrollers";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";

interface FormData {
  name: string;
  medium: "email" | "whatsapp";
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    medium: "email",
    subject: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => smoothScroller("contact-page"), []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMediumChange = (medium: "email" | "whatsapp") => {
    setFormData((prev) => ({
      ...prev,
      medium,
      subject: medium === "whatsapp" ? "" : prev.subject,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Full name is required.";
    if (formData.medium === "email" && !formData.subject.trim())
      return "Subject is required for email.";
    if (!formData.message.trim()) return "Message cannot be empty.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }

    // Preparing message submission
    if (formData.medium === "email") {
      const body = encodeURIComponent(
        `Hi Azlaan, my name is ${formData.name}.\n\n${decodeURIComponent(
          formData.message
        )}`
      );
      const mailto = `mailto:mdazlaan1996@gmail.com?subject=${formData.subject}&body=${body}`;

      setError(null);
      setSuccess(true);

      window.location.href = mailto;
    } else {
      const text = encodeURIComponent(
        `Hi, I'm ${formData.name}: ${formData.message}`
      );
      const phone = "923113046692";
      const url = `https://wa.me/${phone}?text=${text}`;

      setError(null);
      setSuccess(true);

      window.open(url, "_blank");
    }

    setTimeout(() => setSuccess(false), 3000);

    // Reset form
    setFormData({
      name: "",
      medium: "email",
      subject: "",
      message: "",
    });
  };

  // hit top on page reload
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <section
      id="contact-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-3">
        {error && (
          <div role="alert" className="alert alert-error col-span-2 rounded-md">
            <BiSolidError />
            <span>Error! {error}</span>
          </div>
        )}

        {success && (
          <div
            role="alert"
            className="alert alert-success col-span-2 rounded-md"
          >
            <IoMdMailUnread />
            <span>
              {formData.medium === "email"
                ? "Redirecting to your email client."
                : "Redirecting to WhatsApp with your message ready."}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-[13px] w-full">
            Full Name <strong className="text-red-500">*</strong>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full text-[13px] leading-relaxed tracking-wide outline-accent bg-base-100 border border-base-300 px-3 py-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] w-full">Message via</label>
          <div className="flex items-center justify-evenly gap-3 text-[13px] bg-base-100 border border-base-300 px-3 py-2 rounded-md">
            <label htmlFor="email-medium">
              Email
              <input
                id="email-medium"
                type="radio"
                name="medium"
                value="email"
                checked={formData.medium === "email"}
                className="radio radio-sm radio-accent mx-3"
                onChange={() => handleMediumChange("email")}
              />
            </label>
            <label htmlFor="whatsapp-medium">
              WhatsApp
              <input
                id="whatsapp-medium"
                type="radio"
                name="medium"
                value="whatsapp"
                checked={formData.medium === "whatsapp"}
                className="radio radio-sm radio-accent mx-3"
                onChange={() => handleMediumChange("whatsapp")}
              />
            </label>
          </div>
        </div>

        {/* Dynamically render subject only for email */}
        {formData.medium === "email" && (
          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="subject" className="text-[13px] w-full">
              Subject <strong className="text-red-500">*</strong>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full text-[13px] leading-relaxed tracking-wide outline-accent bg-base-100 border border-base-300 px-3 py-2 rounded-md"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="flex flex-col gap-1 col-span-2">
          <label htmlFor="message" className="text-[13px] w-full">
            Message <strong className="text-red-500">*</strong>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full text-[13px] leading-relaxed tracking-wide outline-accent bg-base-100 border border-base-300 px-3 py-2 rounded-md"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="btn btn-neutral btn-block rounded-md text-[14px] group relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
              Send <FaPaperPlane />
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
              Message <IoMdMailUnread />
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
