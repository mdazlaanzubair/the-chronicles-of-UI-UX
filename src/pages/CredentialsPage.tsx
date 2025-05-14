import dark_logo from "../assets/logo-light.svg";
import cobone_logo from "../assets//credentials-logo/cobone_logo.jpeg";
import yallacompare_logo from "../assets//credentials-logo/yallacompare_logo.jpeg";
import transviti_logo from "../assets//credentials-logo/transviti_logo.jpeg";
import suparco_logo from "../assets//credentials-logo/suparco-logo.jpeg";
import fast_logo from "../assets//credentials-logo/fast-logo.jpeg";
import ilma_logo from "../assets//credentials-logo/ilma-logo.jpeg";
import um_logo from "../assets//credentials-logo/um-logo.jpeg";
import umsi_logo from "../assets//credentials-logo/umsi-logo.jpeg";
import hkust_logo from "../assets//credentials-logo/hkust_logo.jpeg";
import deeplearningai_logo from "../assets//credentials-logo/deeplearningai_logo.jpeg";

import SectionHeader from "../components/SectionHeader";
import { MdArrowOutward } from "react-icons/md";

const CredentialsPage = () => {
  const experiences = [
    {
      date: "September 2024 - Present",
      title: "Frontend Developer",
      company: {
        name: "Cobone",
        url: "https://www.cobone.com/en/",
        logo: cobone_logo,
      },
      location: "Dubai, United Arab Emirates",
      description: `Developed and maintained responsive UI components for Cobone.com’s e-commerce platform. Reduced page load times by 25% and boosted mobile engagement by 40%. Implemented real-time filtering and streamlined navigation to boost conversions.`,
    },
    {
      date: "June 2024 - August 2024",
      title: "Frontend Developer",
      company: {
        name: "YallaCompare",
        url: "https://yallacompare.com/uae/en/",
        logo: yallacompare_logo,
      },
      location: "Dubai, United Arab Emirates",
      description: `Developed micro-frontend apps for Health and Travel services, improving performance by 20%, satisfaction by 35%, and reducing onboarding time by 25%.`,
    },
    {
      date: "October 2023 - June 2024",
      title: "Frontend Developer",
      company: {
        name: "Transviti",
        url: "https://transviti.com/",
        logo: transviti_logo,
      },
      location: "Riyadh, Saudi Arabia",
      description: `Streamlined talent acquisition with TalentVare portals. Integrated Microsoft Entra ID with TaskVare, reducing errors by 30%. Automated LOADe delivery bookings, improving logistics efficiency by 15%.`,
    },
    {
      date: "February 2020 - October 2023",
      title: "IT Assistant",
      company: {
        name: "SUPARCO",
        url: "https://www.linkedin.com/company/pakistan-space-and-upper-atmosphere-research-comission-suparco/about/",
        logo: suparco_logo,
      },
      location: "Karachi, Pakistan",
      description: `Reduced document processing time by 40% with a web-based approval system. Improved system uptime by 20%. Gained React.js experience, enhancing user satisfaction by 15%.`,
    },
  ];

  const education = [
    {
      date: "August 2024 - September 2026",
      degree: "Master's degree",
      field: "Computer Software Engineering",
      institute: {
        name: "FAST University",
        url: "https://khi.nu.edu.pk/",
        logo: fast_logo,
      },
    },
    {
      date: "September 2016 - October 2020",
      degree: "Bachelor of Science - BS",
      field: "Computer Software Engineering",
      institute: {
        name: "ILMA University",
        url: "https://ilmauniversity.edu.pk/",
        logo: ilma_logo,
      },
    },
  ];

  const certifications = [
    {
      title: "Front-End Web UI Frameworks and Tools",
      institute: {
        name: "The Hong Kong University of Science and Technology",
        url: "https://www.hkust.edu.hk/",
        logo: hkust_logo,
      },
      date: "Jan 2025",
      credentialId: "DT9KFAGVJ8EG",
      certificate_url:
        "https://www.coursera.org/account/accomplishments/certificate/DT9KFAGVJ8EG",
    },
    {
      title: "Image Processing and OCR",
      institute: {
        name: "University of Michigan - School of Information",
        url: "https://si.umich.edu/",
        logo: umsi_logo,
      },
      date: "Aug 2019",
      credentialId: "F42TMF48MXZP",
      certificate_url:
        "https://www.coursera.org/account/accomplishments/certificate/F42TMF48MXZP",
    },
    {
      title: "Introduction to AI",
      institute: {
        name: "DeepLearning.AI",
        url: "https://www.deeplearning.ai/",
        logo: deeplearningai_logo,
      },
      date: "Apr 2019",
      credentialId: "W2CWXZ2FHD3Q",
      certificate_url:
        "https://www.coursera.org/account/accomplishments/certificate/W2CWXZ2FHD3Q",
    },
    {
      title: "date Structures in Python",
      institute: {
        name: "University of Michigan",
        url: "https://umich.edu/",
        logo: um_logo,
      },
      date: "Apr 2016",
      credentialId: "33JDM48G7YVB",
      certificate_url:
        "https://www.coursera.org/account/accomplishments/certificate/33JDM48G7YVB",
    },
    {
      title: "Web Structuring",
      institute: {
        name: "University of Michigan - School of Information",
        url: "https://si.umich.edu/",
        logo: umsi_logo,
      },
      date: "Apr 2016",
      credentialId: "6UK5ZXUCXU72",
      certificate_url:
        "https://www.coursera.org/account/accomplishments/certificate/6UK5ZXUCXU72",
    },
    {
      title: "Python Programming",
      institute: {
        name: "University of Michigan",
        url: "https://umich.edu/",
        logo: um_logo,
      },
      date: "Mar 2016",
      credentialId: "893KLF5Y6NL9",
      certificate_url:
        "https://www.coursera.org/account/accomplishments/certificate/893KLF5Y6NL9",
    },
  ];

  if (experiences.length) {
    return (
      <section
        id="credentials-page"
        className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
      >
        <SectionHeader
          id="experience-section-head"
          title="Experience"
          mode="dark"
        />
        <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="group relative flex items-start justify-between gap-5 bg-base-100 rounded-xl border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300"
            >
              <button
                type="button"
                className="absolute btn btn-sm btn-neutral btn-square opacity-0 top-3 right-3 -rotate-180 group-hover:rotate-0 group-hover:opacity-100 group-hover:top-3 group-hover:right-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ease-in-out duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mdazlaanzubair/details/experience/",
                    "_blank"
                  )
                }
              >
                <MdArrowOutward />
              </button>

              <div className="min-w-14 min-h-14 max-w-14 max-h-14 w-14 h-14 shrink overflow-hidden bg-white rounded-box p-2 my-5">
                <img
                  className="w-full h-full rounded-lg group-hover:scale-95 transition-all ease-in-out duration-300"
                  src={experience.company.logo}
                  alt={experience.company.name + " logo"}
                />
              </div>

              <div className="grow flex flex-col gap-1">
                <span className="text-[12px] font-light italic text-base-content/30">
                  {experience.date}
                </span>
                <h1 className="text-[14px] font-semibold text-base-content">
                  {experience.title}
                  <a
                    className="link link-accent text-decoration-none"
                    href={experience.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {` @${experience.company.name}`}
                  </a>
                </h1>
                <span className="text-[12px] text-base-content font-normal">
                  {experience.location}
                </span>
                <p className="text-[13px] text-base-content/60 font-normal">
                  {experience.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <SectionHeader
          id="education-section-head"
          title="Education"
          mode="dark"
        />
        <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg">
          {education.map((edu_item, index) => (
            <li
              key={index}
              className="group relative flex items-start justify-between gap-5 bg-base-100 rounded-xl border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300"
            >
              <button
                type="button"
                className="absolute btn btn-sm btn-neutral btn-square opacity-0 top-3 right-3 -rotate-180 group-hover:rotate-0 group-hover:opacity-100 group-hover:top-3 group-hover:right-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ease-in-out duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mdazlaanzubair/details/education/",
                    "_blank"
                  )
                }
              >
                <MdArrowOutward />
              </button>

              <div className="min-w-14 min-h-14 max-w-14 max-h-14 w-14 h-14 shrink overflow-hidden bg-white rounded-box p-2 my-5">
                <img
                  className="w-full h-full rounded-lg group-hover:scale-95 transition-all ease-in-out duration-300"
                  src={edu_item.institute.logo}
                  alt={edu_item.institute.name + " logo"}
                />
              </div>

              <div className="grow flex flex-col gap-1">
                <span className="text-[12px] font-light italic text-base-content/30">
                  {edu_item.date}
                </span>
                <h1 className="text-[14px] font-semibold text-base-content">
                  {edu_item.degree}
                  <a
                    className="link link-accent text-decoration-none"
                    href={edu_item.institute.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {` @${edu_item.institute.name}`}
                  </a>
                </h1>
                <span className="text-[12px] text-base-content font-normal">
                  {edu_item.field}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <SectionHeader
          id="certification-section-head"
          title="Certifications"
          mode="dark"
        />
        <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg">
          {certifications.map((certificate, index) => (
            <li
              key={index}
              className="group relative flex items-start justify-between gap-5 bg-base-100 rounded-xl border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300"
            >
              <button
                type="button"
                className="absolute btn btn-sm btn-neutral btn-square opacity-0 top-3 right-3 -rotate-180 group-hover:rotate-0 group-hover:opacity-100 group-hover:top-3 group-hover:right-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all ease-in-out duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mdazlaanzubair/details/certifications/",
                    "_blank"
                  )
                }
              >
                <MdArrowOutward />
              </button>

              <div className="min-w-14 min-h-14 max-w-14 max-h-14 w-14 h-14 shrink overflow-hidden bg-white rounded-box p-2 my-5">
                <img
                  className="w-full h-full rounded-lg group-hover:scale-95 transition-all ease-in-out duration-300"
                  src={certificate.institute.logo}
                  alt={certificate.institute.name + " logo"}
                />
              </div>

              <div className="grow flex flex-col gap-1">
                <span className="text-[12px] font-light italic text-base-content/30">
                  Issued in {certificate.date}
                </span>
                <h1 className="text-[14px] font-semibold text-base-content">
                  {certificate.title}
                  <a
                    className="link link-accent text-decoration-none block text-[12px]"
                    href={certificate.institute.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {` @${certificate.institute.name}`}
                  </a>
                </h1>
                <span className="text-[12px] text-base-content font-normal">
                  Credential ID
                  <a
                    className="link link-info text-decoration-none"
                    href={certificate.certificate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {` ${certificate.credentialId}`}
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default CredentialsPage;
