type Props = {
  message: string;
};

const NoCredentials = (props: Props) => {
  return (
    <li className="group relative w-full flex items-center justify-center gap-5 bg-base-100 h-30 rounded-lg border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300">
      <h1 className="text-xs font-semibold text-base-content/30">
        {props.message ? props.message : "No Credentials"}
      </h1>
    </li>
  );
};

export default NoCredentials;
