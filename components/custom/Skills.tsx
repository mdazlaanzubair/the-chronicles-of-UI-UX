import { toSkills } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { SKILLS_QUERY } from "@/src/sanity/queries"
import type { SkillInterface } from "@/type"
import { Card, CardContent, CardTitle } from "../ui/card"

const options = { next: { revalidate: 30 } }

const Skills = async () => {
  let skillSets: SkillInterface[] = []
  let fetchError: string | null = null

  try {
    const response = await client.fetch(SKILLS_QUERY, {}, options)
    skillSets = toSkills(response)
  } catch (error: unknown) {
    console.error("Sanity skills fetch error:", error)
    fetchError =
      error instanceof Error ? error.message : "Failed to load skills."
  }

  if (fetchError) {
    return (
      <section id="skills" className="p-4">
        <p className="text-xs text-muted-foreground">{fetchError}</p>
      </section>
    )
  }

  if (skillSets.length === 0) return null

  return (
    <section id="skills">
      <div className="p-4">
        <span className="eyebrow text-xs">Capabilities</span>
        <h1 className="font-heading text-2xl font-semibold mb-3">Skills</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A broad toolkit organized around shipping robust digital products.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
        {skillSets.map((skillSet) => (
          <Card
            key={skillSet.id}
            className="border border-accent bg-background p-6 shadow-none"
          >
            <CardContent className="p-0 text-xs text-muted-foreground bg-transparent">
              <CardTitle className="mb-3 font-heading text-foreground">
                {skillSet.title}
              </CardTitle>
              <p className="leading-5 tracking-wider">
                {skillSet.tags.join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills
