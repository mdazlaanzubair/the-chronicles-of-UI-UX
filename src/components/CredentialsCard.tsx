import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

type firmType = {
  name: string;
  url: string;
  logo: string;
};

type Props = {
  key: number;
  date: string;
  title: string;
  firm: firmType;
  description: string;

  field?: string;
  location?: string;
  credential_id?: string;
  doc_url?: string;
};

type ModalProps = Props & {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const CredentialCard = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        key={props.key}
        className="group relative flex items-center justify-between gap-5 bg-base-100/50 rounded-xl border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300 cursor-pointer"
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
                Credential ID
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

const CredentialCardModal = (props: ModalProps) => {
  return (
    <div
      className={`
        fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center overflow-hidden bg-black/60 backdrop-blur-sm p-2
        ${!props.showModal ? "opacity-0 -z-50" : "opacity-100 z-50"}
        transition-all ease-in-out duration-500
        `}
      onClick={() => props.setShowModal(false)}
    >
      <div
        key={props.key}
        className="group relative w-full max-w-[600px] flex flex-wrap items-center justify-center gap-5 bg-base-100 rounded-xl border border-base-300 p-5 overflow-hidden transition-all ease-in-out duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center gap-3">
          <div className="min-w-14 min-h-14 max-w-14 max-h-14 w-14 h-14 shrink overflow-hidden bg-white rounded-box p-2 shadow">
            <img
              className="w-full h-full rounded-lg group-hover:scale-95 transition-all ease-in-out duration-300"
              src={props.firm.logo}
              alt={props.firm.name + " logo"}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[16px] font-semibold text-base-content">
              {props.firm.name}
            </h1>
            <a
              className="link link-accent text-xs text-decoration-none"
              href={props.firm.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          </div>
        </div>

        <div className="grow flex flex-col gap-1 overflow-hidden w-full">
          <button
            type="button"
            className="absolute top-3 right-3 z-10 btn btn-square opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
            onClick={() => props.setShowModal(false)}
          >
            <RxCross2 className="text-xl group-hover:rotate-180 transition-all ease-in-out duration-300" />
          </button>

          <span className="text-[12px] font-light italic text-base-content/50">
            {props.date}
          </span>
          <h1 className="text-[14px] font-semibold text-base-content">
            {props.title}
          </h1>
          <span className="text-[12px] text-base-content font-normal">
            {props.location}
          </span>
          <p className="text-[13px] text-base-content/60 font-normal">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
