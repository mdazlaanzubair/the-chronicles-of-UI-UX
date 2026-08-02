import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import localConstantData from "@/constant.json"

const Interest = () => {
  const interests = localConstantData.interests as string[]

  if (!interests || interests.length <= 0) return null
  return (
    <section id="skills">
      <div className="p-4">
        <span className="eyebrow text-xs">Beyond the work</span>
        <h1 className="mb-3 font-heading text-2xl font-semibold">Interests</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A broad toolkit organized around shipping robust digital products.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, idx) => (
          <li
            key={interest}
            className="flex items-center gap-2 bg-background font-semibold border border-muted p-3 text-xs"
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
