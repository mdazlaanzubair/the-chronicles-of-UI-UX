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
}

export const HeaderComponent = ({ title, sub_title }: HeaderProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full h-auto">
      <div className="col-span-2 p-5 bg-base-100 rounded-lg border border-base-300">
        {title.length > 0 && <h1 className="text-[32px] font-bold">{title}</h1>}
        {sub_title.length > 0 && (
          <h3 className="text-[18px] font-normal">{sub_title}</h3>
        )}
      </div>
    </div>
  );
};

export const OverviewComponent = ({ overview }: { overview: Overview }) => {
  return (
    <section
      id="overview-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <div className="grid grid-cols-2 items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <InfoTags title="Timeline" value={overview.timeline} />
        <InfoTags title="My Role" value={overview.my_role} />

        {overview.team.length > 0 && (
          <div className="flex flex-col w-full col-span-2">
            <h2 className="text-[10px] font-bold text-base-content/50 uppercase">
              Team
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

      <ImagePreview
        title={`${overview.title} of Project`}
        src={overview.img}
        alt={overview.title}
      />

      {overview.desc.length > 0 && (
        <div className="grid grid-cols-2 items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
          <div className="flex flex-col w-full col-span-2">
            <h1 className="text-[32px] font-bold mb-3 text-base-content uppercase">
              {overview.title}
            </h1>
            {overview.desc.map((para, index) => (
              <p
                key={index}
                className={`text-[12px] lg:text-[14px] font-medium text-base-content/60 ${
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
      <div className="grid grid-cols-2 items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <div className="flex flex-col w-full col-span-2">
          <h1 className="text-[32px] font-bold mb-3 text-base-content uppercase">
            {problem.title}
          </h1>
          <p
            className={`text-[12px] lg:text-[14px] font-medium text-base-content/60`}
          >
            {problem.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export const SolutionsComponent = ({ solutions }: { solutions: Solutions }) => {
  return (
    <section
      id="solutions-section"
      className="w-full h-auto flex flex-col items-center justify-start gap-3"
    >
      <div className="grid grid-cols-2 items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <div className="flex flex-col w-full col-span-2">
          <h1 className="text-[32px] font-bold mb-3 text-base-content uppercase">
            {solutions.title}
          </h1>
          <p
            className={`text-[12px] lg:text-[14px] font-medium text-base-content/60`}
          >
            {solutions.desc}
          </p>
        </div>
        {solutions.solution_list.length > 0 && (
          <ul className="flex flex-col w-full col-span-2 gap-3">
            {solutions.solution_list.map((solution, index) => (
              <li key={index} className="flex flex-col w-full h-auto gap-3">
                <p className="text-[12px] font-normal text-base-content/60">
                  <strong>{`${solution.title}: `}</strong>
                  {solution.desc}
                </p>
                {solution.img && (
                  <div className="w-full h-[300px] max-h-[300px] rounded-2xl overflow-hidden p-0">
                    <img
                      className="w-full h-full object-fill object-center"
                      title={solution.title}
                      src={solution.img}
                      alt={solution.title}
                    />
                  </div>
                )}
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
      <div className="flex flex-col items-start justify-start gap-3 p-5 w-full h-auto bg-base-100 rounded-lg border border-base-300">
        <h1 className="text-[32px] font-bold mb-3 text-base-content uppercase">
          {impact.title}
        </h1>
        <p
          className={`text-[12px] lg:text-[14px] font-medium text-base-content/60`}
        >
          {impact.desc}
        </p>
        {impact.impact_list.length > 0 && (
          <ul className="flex flex-col w-full col-span-2 gap-3">
            {impact.impact_list.map((impact, index) => (
              <li key={index} className="flex flex-col w-full h-auto gap-3">
                <p className="text-[12px] font-normal text-base-content/60">
                  <strong>{`${impact.title}: `}</strong>
                  {impact.desc}
                </p>
              </li>
            ))}
          </ul>
        )}
        {impact.img && (
          <div className="w-full h-[300px] max-h-[300px] rounded-2xl overflow-hidden p-0">
            <img
              className="w-full h-full object-fill object-center"
              title={impact.title}
              src={impact.img}
              alt={impact.title}
            />
          </div>
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
        <h1 className="text-[32px] font-bold mb-3 text-base-content uppercase">
          {contributions.title}
        </h1>
        <p
          className={`text-[12px] lg:text-[14px] font-medium text-base-content/60`}
        >
          {contributions.desc}
        </p>
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
        <h1 className="text-[32px] font-bold mb-3 text-base-content uppercase">
          {conclusion.title}
        </h1>
        <p
          className={`text-[12px] lg:text-[14px] font-medium text-base-content/60`}
        >
          {conclusion.desc}
        </p>
      </div>
    </section>
  );
};

// sub > sub components

const InfoTags = ({
  title,
  value,
  isTwoColumn,
}: {
  title: string;
  value: string;
  isTwoColumn?: boolean | null;
}) => (
  <div
    className={`flex flex-col w-full ${
      isTwoColumn ? "col-span-2" : "col-span-1"
    }`}
  >
    <h2 className="text-[10px] font-bold text-base-content/50 uppercase">
      {title}
    </h2>
    <p className="text-[12px] lg:text-[14px] font-medium text-base-content">
      {value}
    </p>
  </div>
);

const ImagePreview = ({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className="group relative w-full h-auto flex flex-col justify-between bg-base-100 rounded-lg border-4 overflow-hidden border-base-300">
      <div className="absolute z-10 bottom-0 right-0 w-fit flex items-center justify-center gap-2 bg-base-300 rounded-tl-lg pt-1 px-3">
        <small className="text-[10px] font-medium text-base-content">
          {title}
        </small>
      </div>

      <img
        className="w-full h-full object-center object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};
