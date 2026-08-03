import ProjectsList from "@/components/custom/ProjectsList"
import { toWorkItems } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { WORK_LIST_QUERY } from "@/src/sanity/queries"
import type { WorkInterface } from "@/type"

const options = { next: { revalidate: 30 } }

const Page = async () => {
  let projects: WorkInterface[] = []
  let fetchError: string | null = null

  try {
    const response = await client.fetch(WORK_LIST_QUERY, {}, options)
    projects = toWorkItems(response)
  } catch (error: unknown) {
    console.error("Sanity projects fetch error:", error)
    fetchError =
      error instanceof Error ? error.message : "Failed to load projects."
  }

  return (
    <section id="projects" className="flex flex-col">
      {projects.length === 0 ? (
        <div className="rounded-md border border-dashed border-accent bg-muted/20 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            {fetchError || "No projects have been added yet."}
          </p>
        </div>
      ) : (
        <ProjectsList projects={projects} />
      )}
    </section>
  )
}

export default Page
