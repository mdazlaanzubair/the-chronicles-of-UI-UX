import NoCredentials from "../../components/NoCredentials";
import {
  experiences,
  education,
  certifications,
  publications,
} from "../../utils/constant_export";

import CredentialCard from "./components/CredentialsCard";
import SectionHeader from "../../components/SectionHeader";
import FloatingDocs from "../../components/FloatingDocs";
import { RiArticleFill } from "react-icons/ri";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { useEffect } from "react";
import { smoothScroller } from "../../utils/pageScrollers";

const CredentialsPage = () => {
  const credentials = {
    experiences,
    publications,
    education,
    certifications,
  };

  const navList = [
    {
      title: "Experience",
      sectionId: "experiences-section",
      icon: <FaBriefcase />,
    },
    {
      title: "Publications",
      sectionId: "publications-section",
      icon: <RiArticleFill />,
    },
    {
      title: "Education",
      sectionId: "education-section",
      icon: <FaGraduationCap />,
    },
    {
      title: "Certifications",
      sectionId: "certifications-section",
      icon: <PiCertificateFill />,
    },
  ];

  // hit top on page reload
  useEffect(() => smoothScroller("credentials-page"), []);

  return (
    <section
      id="credentials-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      {Object.entries(credentials).map(([sectionKey, items]) => (
        <div className="w-full h-auto" key={sectionKey}>
          <SectionHeader
            id={`${sectionKey}-section`}
            title={`${sectionKey}`}
            mode="dark"
          />
          <ul className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg mt-3">
            {items.length === 0 ? (
              <NoCredentials message="No Experience" />
            ) : (
              items.map((cred) => (
                <CredentialCard
                  key={sectionKey}
                  firm={cred.firm}
                  date={cred.date}
                  title={cred.title}
                  description={cred.description}
                  location={cred.location}
                  doc_url={cred.doc_url}
                  credential_id={cred.credentialId}
                />
              ))
            )}
          </ul>
        </div>
      ))}
      <FloatingDocs navList={navList} />
    </section>
  );
};

export default CredentialsPage;
