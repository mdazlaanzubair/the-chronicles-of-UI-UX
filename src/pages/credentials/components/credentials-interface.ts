export type firmType = {
  name: string;
  url: string;
  logo: string;
};

export type CredentialsProps = {
  key: number | string;
  date: string;
  title: string;
  firm: firmType;
  description: string;

  location?: string;
  credential_id?: string;
  doc_url?: string;
};

export type ModalCredentialsProps = CredentialsProps & {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};
