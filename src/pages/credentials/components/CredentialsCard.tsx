import { useState } from "react";
import CredentialCardModal from "./CredentialsCardModal";
import type { CredentialsProps } from "./credentials-interface";

const CredentialCard = (props: CredentialsProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        key={props.key}
        id="credential-card"
        className="group w-full relative flex items-center justify-between gap-5 bg-base-100/50 rounded-xl border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="min-w-14 min-h-14 max-w-14 max-h-14 w-14 h-14 shrink overflow-hidden rounded-box p-2 my-auto">
          <img
            className="w-full h-full rounded-lg"
            src={props.firm.logo}
            alt={props.firm.name + " logo"}
          />
        </div>

        <div className="grow flex flex-col gap-1">
          <h1 className="text-[14px] font-semibold text-base-content mb-2">
            {props.title}
            <br />
            <span className="font-medium text-base-content/50">
              {props.firm.name}
            </span>
          </h1>
          <p className="flex flex-wrap items-center justify-between gap-2">
            {props.credential_id && props.doc_url && (
              <span className="text-[12px] text-base-content font-normal">
                Credential:
                <a
                  className="link link-secondary text-decoration-none"
                  href={props.doc_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {` ${props.credential_id}`}
                </a>
              </span>
            )}
            <span className="text-[12px] text-base-content font-normal">
              {props.date}
            </span>
          </p>
        </div>
      </div>
      <CredentialCardModal
        key={props.key}
        showModal={showModal}
        setShowModal={setShowModal}
        firm={props.firm}
        date={props.date}
        title={props.title}
        description={props.description}
        location={props.location}
      />
    </>
  );
};

export default CredentialCard;
