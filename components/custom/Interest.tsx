import type { InterestType } from "@/type"

const Interest = ({
  interests,
  fetchError,
}: {
  interests: InterestType
  fetchError?: string
}) => {
  return (
    <section id="interests" aria-labelledby="interests-heading">
      <div className="p-4">
        <span className="eyebrow text-xs">Beyond the work</span>
        <h2
          id="interests-heading"
          className="mb-3 font-heading text-2xl font-semibold"
        >
          Interests
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Topics and activities that keep my perspective broader than the work.
        </p>
      </div>
      {fetchError ? (
        <p className="px-4 pb-4 text-xs text-muted-foreground">{fetchError}</p>
      ) : null}
      <ul className="motion-stagger grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3">
        {interests.map((interest, idx) => (
          <li
            key={interest}
            className="flex items-center gap-2 border border-accent bg-background p-3 text-xs font-semibold"
          >
            <span className="eyebrow">{idx + 1}</span>
            <p className="text-muted-foreground">{interest}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Interest
