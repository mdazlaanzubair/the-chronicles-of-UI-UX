import type { SkillInterface } from "@/type"

const Skills = ({
  skillSets,
  fetchError,
}: {
  skillSets: SkillInterface[]
  fetchError?: string
}) => {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="p-4">
        <span className="eyebrow text-xs">Capabilities</span>
        <h2
          id="skills-heading"
          className="mb-3 font-heading text-2xl font-semibold"
        >
          Skills
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A broad toolkit organized around shipping robust digital products.
        </p>
      </div>
      {fetchError ? (
        <p className="px-4 pb-4 text-xs text-muted-foreground">{fetchError}</p>
      ) : null}
      <div className="motion-stagger grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
        {skillSets.map((skillSet) => (
          <article
            key={skillSet.id}
            className="border border-accent bg-background p-6 shadow-none"
          >
            <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">
              {skillSet.title}
            </h3>
            <p className="text-xs leading-5 tracking-wider text-muted-foreground">
              {skillSet.tags.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
