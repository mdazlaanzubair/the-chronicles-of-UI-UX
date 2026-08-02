import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import localConstantData from "@/constant.json"
import { SkillInterface } from "@/type"

const Skills = () => {
  const skillSets = localConstantData.skills as SkillInterface[]

  if (!skillSets || skillSets.length <= 0) return null
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
          <Card key={skillSet.id} className="bg-background p-6 border border-accent shadow-none">
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
