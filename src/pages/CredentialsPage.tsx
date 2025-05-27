import NoCredentials from "../components/NoCredentials";
import FooterBtn from "../components/FooterBtn";
import { MdArrowOutward } from "react-icons/md";
import {
  experiences,
  education,
  certifications,
} from "../utils/constant_export";

import CredentialCard from "../components/CredentialsCard";

const CredentialsPage = () => {
  const credentials = {
    experiences,
    education,
    certifications,
  };

  return (
    <section
      id="credentials-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >

{
  // loop credentials data to populate this ui
  /*
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
            <CredentialCard
              key={index}
              firm={exp.company}
              date={exp.date}
              title={exp.title}
              description={exp.description}
              location={exp.location}
            />
          ))
        )}
      </ul>
  */
}



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
            <CredentialCard
              key={index}
              firm={exp.company}
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
            <CredentialCard
              key={index}
              date={edu_item.date}
              title={edu_item.title}
              field={edu_item.field}
              firm={edu_item.firm}
              description={edu_item.description}
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
            <CredentialCard
              key={index}
              doc_url={certi.doc_url}
              credential_id={certi.credentialId}
              firm={certi.firm}
              date={certi.date}
              title={certi.title}
              description={certi.description}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default CredentialsPage;
