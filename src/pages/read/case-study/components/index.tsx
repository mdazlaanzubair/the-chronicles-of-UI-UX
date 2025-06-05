import { getDomainFromUrl } from "../../../../utils/domainExtractor";
import type {
  Impact,
  Overview,
  Problem,
  Solutions,
  Contributions,
  Conclusion,
} from "./case-study-interface";

interface HeaderProps {
  title: string;
  sub_title: string;
  overview: Overview;
}

export const HeaderComponent = ({
  title,
  sub_title,
  overview,
}: HeaderProps) => {
  return (
    <section
      id="header-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <div className="w-full p-5 bg-base-100 rounded-lg border border-base-300">
        {title.length > 0 && <h1 className="text-[32px] font-bold">{title}</h1>}
        {sub_title.length > 0 && (
          <h3 className="text-[18px] font-normal">{sub_title}</h3>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 w-full h-auto">
        <InfoTags title="Timeline" value={overview.timeline} />
        <InfoTags title="Checkout" url={overview.url} />
        {/* <InfoTags title="My Role" value={overview.my_role} /> */}

        {overview.team.length > 0 && (
          <div className="flex flex-col w-full col-span-2 p-5 bg-base-100 rounded-lg border border-base-300">
            <h2 className="text-[10px] font-bold text-base-content/50 uppercase">
              The Team
            </h2>
            <div className="text-[12px] lg:text-[14px] flex flex-wrap items-center justify-start gap-0 font-medium text-base-content">
              {overview.team.map((member, index) => (
                <div key={index} className="tooltip" data-tip={member.role}>
                  <a
                    className="link text-accent mr-1"
                    href={member.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to view profile"
                  >
                    {member.name}
                  </a>
                  {overview.team.length === index + 1 ? "" : ""}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const OverviewComponent = ({ overview }: { overview: Overview }) => {
  return (
    <section
      id="overview-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <ImagePreview
        caption={`Overview of the Project`}
        src={overview.img}
        alt={`${overview.title} Project Overview${
          overview.desc.length > 0 && `: ${overview.desc}`
        }`}
      />

      {overview.desc.length > 0 && (
        <div className="flex flex-col w-full items-start justify-start gap-3 p-5 h-auto bg-base-100 rounded-lg border border-base-300">
          <div className="flex flex-col w-full col-span-2">
            <h1 className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed">
              {overview.title}
            </h1>
            {overview.desc.map((para, index) => (
              <p
                key={index}
                className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed ${
                  overview.desc.length === index + 1 ? "" : "mb-3"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export const ProblemComponent = ({ problem }: { problem: Problem }) => {
  return (
    <section
      id="problem-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <ImagePreview
        caption={`Problem Statement of the Project`}
        src={problem.img}
        alt={`${problem.title} Project Problem Statement${
          problem.desc.length > 0 && `: ${problem.desc}`
        }`}
      />
      <div className="w-full h-auto flex flex-col items-start justify-start gap-3 p-5 bg-base-100 rounded-lg border border-base-300">
        <h1 className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed">
          {problem.title}
        </h1>
        <p
          className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed`}
        >
          {problem.desc}
        </p>
      </div>
    </section>
  );
};

export const SolutionsComponent = ({ solutions }: { solutions: Solutions }) => {
  return (
    <section
      id="solution-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <ImagePreview
        caption={`Solution to the Project`}
        src={solutions.img}
        alt={`${solutions.title} Project Solution${
          solutions.desc.length > 0 && `: ${solutions.desc}`
        }`}
      />
      <div className="grid grid-cols-2 items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <div className="flex flex-col w-full col-span-2">
          <h1 className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed">
            {solutions.title}
          </h1>
          <p
            className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed`}
          >
            {solutions.desc}
          </p>
        </div>
        {solutions.solution_list.length > 0 && (
          <ul className="flex flex-col w-full col-span-2 gap-3 px-5">
            {solutions.solution_list.map((solution, index) => (
              <li key={index} className="flex flex-col w-full h-auto gap-1">
                <h3 className="text-[12px] lg:text-[14px] font-semibold text-base-content tracking-tight leading-snug">
                  {`${solution.title}`}
                </h3>
                <p className="text-[11px] lg:text-[12px] font-normal text-base-content/60 tracking-tight leading-relaxed">
                  {solution.desc}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export const ImpactComponent = ({ impact }: { impact: Impact }) => {
  return (
    <section
      id="impact-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <ImagePreview
        caption={`Impact Analysis of the Project`}
        src={impact.img}
        alt={`${impact.title} Project Impact Analysis ${
          impact.desc.length > 0 && `: ${impact.desc}`
        }`}
      />

      <div className="flex flex-col items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <div className="flex flex-col w-full col-span-2">
          <h1 className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed">
            {impact.title}
          </h1>
          <p
            className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed`}
          >
            {impact.desc}
          </p>
        </div>
        {impact.impact_list.length > 0 && (
          <ul className="flex flex-col w-full col-span-2 gap-3 px-5">
            {impact.impact_list.map((impact, index) => (
              <li key={index} className="flex flex-col w-full h-auto gap-1">
                {/* <h3 className="text-[12px] lg:text-[14px] font-semibold text-base-content tracking-tight leading-snug">
                  {impact.title}
                </h3> */}
                <p className="text-[11px] lg:text-[12px] font-normal text-base-content/60 tracking-tight leading-relaxed">
                  <strong className="font-semibold text-base-content">{`${impact.title}: `}</strong>
                  {impact.desc}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export const ContributionsComponent = ({
  contributions,
}: {
  contributions: Contributions;
}) => {
  return (
    <section
      id="contributions-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <div className="flex flex-col items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <div className="flex flex-col w-full col-span-2">
          <h1 className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed">
            {contributions.title}
          </h1>
          <p
            className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed`}
          >
            {contributions.desc}
          </p>
        </div>
        {contributions.learning_list.length > 0 && (
          <ul className="flex flex-col w-full col-span-2 gap-3">
            {contributions.learning_list.map((lesson, index) => (
              <li key={index} className="flex flex-col w-full h-auto gap-3">
                <p className="text-[12px] font-normal text-base-content/60">
                  {lesson.title.length > 0 && (
                    <strong>{`${lesson.title}: `}</strong>
                  )}
                  {lesson.desc}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export const ConclusionComponent = ({
  conclusion,
}: {
  conclusion: Conclusion;
}) => {
  return (
    <section
      id="problem-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <div className="flex flex-col items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <div className="flex flex-col w-full col-span-2">
          <h1 className="text-[20px] font-bold mb-1 text-base-content tracking-tight leading-relaxed">
            {conclusion.title}
          </h1>
          <p
            className={`text-[12px] lg:text-[14px] font-normal text-base-content/50 tracking-tight leading-relaxed`}
          >
            {conclusion.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

// sub > sub components

const InfoTags = ({
  title,
  value,
  url,
  isTwoColumn,
}: {
  title: string;
  value?: string;
  url?: string;
  isTwoColumn?: boolean | null;
}) => (
  <div
    className={`flex flex-col w-full p-5 ${
      isTwoColumn ? "col-span-2" : "col-span-1"
    } bg-base-100 rounded-lg border border-base-300`}
  >
    <h2 className="text-[10px] font-bold text-base-content/50 uppercase">
      {title}
    </h2>
    {url && url?.length > 0 ? (
      <a
        href={url}
        className="text-[12px] lg:text-[14px] font-medium link link-accent"
      >
        {getDomainFromUrl(url)}
      </a>
    ) : (
      <p className="text-[12px] lg:text-[14px] font-medium text-base-content">
        {value}
      </p>
    )}
  </div>
);

const ImagePreview = ({
  caption,
  src,
  alt,
}: {
  caption: string;
  src: string;
  alt: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border-t-2 border-base-300 mt-3 pt-3`}
    >
      <p className="flex w-full items-center justify-start text-[10px] text-base-content/60 gap-3">
        <strong className="px-2 py-1 rounded text-accent bg-base-100 border-2 border-base-300 uppercase font-bold">
          Caption
        </strong>
        <span className="mt-px mb-px font-semibold">{caption}</span>
      </p>
      <div className="ring-2 ring-base-300 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-center object-cover"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};
