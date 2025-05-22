import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import CertificateCard from "../components/CertificateCard";
import NoCredentials from "../components/NoCredentials";
import FooterBtn from "../components/FooterBtn";
import { MdArrowOutward } from "react-icons/md";

import {
  experiences,
  education,
  certifications,
} from "../utils/constant_export";

const CredentialsPage = () => {
  return (
    <section
      id="credentials-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <FooterBtn
        mode="light"
        label="Experience"
        icon_1={<MdArrowOutward />}
        icon_2={<MdArrowOutward />}
        onClickHandler={() =>
          window.open(
            "https://www.linkedin.com/in/mdazlaanzubair/details/experience/",
            "_blank"
          )
        }
      />
      <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg">
        {experiences.length === 0 ? (
          <NoCredentials message="No Experience" />
        ) : (
          experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              date={exp.date}
              title={exp.title}
              description={exp.description}
              location={exp.location}
            />
          ))
        )}
      </ul>

      <FooterBtn
        mode="light"
        label="Education"
        icon_1={<MdArrowOutward />}
        icon_2={<MdArrowOutward />}
        onClickHandler={() =>
          window.open(
            "https://www.linkedin.com/in/mdazlaanzubair/details/education/",
            "_blank"
          )
        }
      />
      <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg">
        {education.length === 0 ? (
          <NoCredentials message="No Education" />
        ) : (
          education.map((edu_item, index) => (
            <EducationCard
              key={index}
              date={edu_item.date}
              degree={edu_item.degree}
              field={edu_item.field}
              institute={edu_item.institute}
            />
          ))
        )}
      </ul>

      <FooterBtn
        mode="light"
        label="Certifications"
        icon_1={<MdArrowOutward />}
        icon_2={<MdArrowOutward />}
        onClickHandler={() =>
          window.open(
            "https://www.linkedin.com/in/mdazlaanzubair/details/certifications/",
            "_blank"
          )
        }
      />
      <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg">
        {certifications.length === 0 ? (
          <NoCredentials message="No Certifications" />
        ) : (
          certifications.map((certi, index) => (
            <CertificateCard
              key={index}
              certificate_url={certi.certificate_url}
              credentialId={certi.credentialId}
              title={certi.title}
              institute={certi.institute}
              date={certi.date}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default CredentialsPage;
