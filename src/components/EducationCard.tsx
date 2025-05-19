
type instituteType = {
  name: string;
  url: string;
  logo: string;
};

type Props = {
  key: number;
  date: string;
  degree: string;
  field: string;
  institute: instituteType;
};

const EducationCard = (props: Props) => {
  return (
    <li
      key={props.key}
      className="group relative flex items-start justify-between gap-5 bg-base-100 rounded-xl border border-base-300 p-3 overflow-hidden transition-all ease-in-out duration-300"
    >
      <div className="min-w-14 min-h-14 max-w-14 max-h-14 w-14 h-14 shrink overflow-hidden bg-white rounded-box p-2 my-5">
        <img
          className="w-full h-full rounded-lg group-hover:scale-95 transition-all ease-in-out duration-300"
          src={props.institute.logo}
          alt={props.institute.name + " logo"}
        />
      </div>

      <div className="grow flex flex-col gap-1">
        <span className="text-[12px] font-light italic text-base-content/30">
          {props.date}
        </span>
        <h1 className="text-[14px] font-semibold text-base-content">
          {props.degree}
          <a
            className="link link-accent text-decoration-none"
            href={props.institute.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {` @${props.institute.name}`}
          </a>
        </h1>
        <span className="text-[12px] text-base-content font-normal">
          {props.field}
        </span>
      </div>
    </li>
  );
};

export default EducationCard;
