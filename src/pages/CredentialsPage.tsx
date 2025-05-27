import NoCredentials from "../components/NoCredentials";
import {
  experiences,
  education,
  certifications,
} from "../utils/constant_export";

import CredentialCard from "../components/CredentialsCard";
import SectionHeader from "../components/SectionHeader";

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
              items.map((cred, index) => (
                <CredentialCard
                  key={index}
                  firm={cred.firm}
                  date={cred.date}
                  title={cred.title}
                  description={cred.description}
                  location={cred.location}
                  field={cred.field}
                  doc_url={cred.doc_url}
                  credential_id={cred.credentialId}
                />
              ))
            )}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CredentialsPage;
