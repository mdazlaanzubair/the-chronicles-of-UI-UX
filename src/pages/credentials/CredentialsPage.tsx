import { motion } from "framer-motion";
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
import {
  childVariantFadeIn,
  pageTransitionVariants,
  parentVariantFadeIn,
} from "../../utils/animationVarients";

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
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <motion.section
      id="credentials-page"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
      >
        {Object.entries(credentials).map(([sectionKey, items], index) => (
          <motion.div
            variants={childVariantFadeIn}
            className="w-full h-auto"
            key={`${sectionKey}`}
          >
            <SectionHeader
              id={`${sectionKey}-section-${index}`}
              title={`${sectionKey}`}
              mode="dark"
            />
            <motion.ul
              variants={parentVariantFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full h-auto flex flex-col gap-3 justify-between bg-base-200 rounded-lg mt-3"
            >
              {items.length === 0 ? (
                <NoCredentials message="No Experience" />
              ) : (
                items.map((cred, index) => (
                  <motion.div
                    key={`${sectionKey}-card-holder-${index}`}
                    variants={childVariantFadeIn}
                    className="flex flex-col items-center justify-center gap-3 w-full h-auto"
                  >
                    <CredentialCard
                      firm={cred.firm}
                      date={cred.date}
                      title={cred.title}
                      description={cred.description}
                      location={cred.location}
                      doc_url={cred.doc_url}
                      credential_id={cred.credentialId}
                    />
                  </motion.div>
                ))
              )}
            </motion.ul>
          </motion.div>
        ))}
        <FloatingDocs navList={navList} />
      </motion.div>
    </motion.section>
  );
};

export default CredentialsPage;
