"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { WorkInterface } from "@/type"
import { Code2Icon, ExternalLinkIcon } from "lucide-react"
import { PortableText, type PortableTextComponents } from "next-sanity"
import Link from "next/link"
import { useState } from "react"

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="leading-6 [&:not(:first-child)]:mt-3">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-5 text-lg font-semibold text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 font-semibold text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 font-medium text-foreground">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-2 border-primary pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-3 grid list-outside list-disc grid-cols-1 space-y-2 pl-5 md:grid-cols-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-3 list-outside list-decimal space-y-2 pl-5">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : undefined

      if (!href) return <>{children}</>

      const openInNewTab = value.openInNewTab === true

      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className="text-primary underline underline-offset-2"
        >
          {children}
        </a>
      )
    },
  },
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date))

const ProjectsList = ({ projects }: { projects: WorkInterface[] }) => {
  const [selectedProject, setSelectedProject] = useState<WorkInterface | null>(
    null
  )

  return (
    <>
      <section className="flex flex-col gap-0">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group/project relative flex flex-col gap-3 border-b border-accent bg-card p-4 transition-colors last:border-b-0 hover:bg-muted/30"
          >
            <button
              type="button"
              aria-label={`View details for ${project.title}`}
              onClick={() => setSelectedProject(project)}
              className="absolute inset-0 z-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
            />

            <div className="pointer-events-none relative z-10 min-w-0">
              <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                {project.metadata.isFeatured && (
                  <span className="text-xs font-medium text-primary">
                    Featured
                  </span>
                )}
                {/* {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="text-xs font-medium text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))} */}
              </div>

              <h2 className="line-clamp-2 text-lg leading-snug font-semibold tracking-tight transition-colors group-hover/project:text-foreground sm:text-base">
                {project.title}
              </h2>

              <p className="mt-1 line-clamp-3 text-xs leading-5 text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* <div className="pointer-events-none relative z-10 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <time dateTime={project.updatedAt}>
                Updated {formatDate(project.updatedAt)}
              </time>

              <div className="pointer-events-auto flex items-center gap-1">
                {project.metadata.repositoryUrl && (
                  <Link
                    href={project.metadata.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "h-7 gap-1 px-2 text-xs"
                    )}
                  >
                    <Code2Icon className="size-3" />
                    Source
                  </Link>
                )}
                {project.metadata.projectUrl && (
                  <Link
                    href={project.metadata.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "h-7 gap-1 px-2 text-xs"
                    )}
                  >
                    <ExternalLinkIcon className="size-3" />
                    Visit
                  </Link>
                )}
              </div>
            </div> */}
          </article>
        ))}
      </section>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null)
        }}
      >
        {selectedProject && (
          <DialogContent className="max-h-[85vh] overflow-hidden border border-border/60 bg-card sm:max-w-2xl">
            <DialogHeader className="">
              {selectedProject.metadata.isFeatured && (
                <span className="eyebrow text-[11px]">Featured project</span>
              )}
              <DialogTitle className="normal-case font-heading text-xl font-semibold">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="max-h-[52vh] space-y-6 overflow-y-auto pr-2">
              <section>
                <h3 className="mb-3 font-heading text-base font-semibold text-foreground">
                  Key contributions
                </h3>
                {selectedProject.metadata.key_contributions.length > 0 ? (
                  <div className="text-xs text-muted-foreground">
                    <PortableText
                      value={selectedProject.metadata.key_contributions}
                      components={portableTextComponents}
                    />
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    No project contributions have been added yet.
                  </p>
                )}
              </section>

              {selectedProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={`${selectedProject.id}-modal-${tag}`}
                      className="modal-tag-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <DialogFooter className="items-center border-t border-accent pt-4 sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Updated {formatDate(selectedProject.updatedAt)}
              </p>
              <div className="flex items-center gap-2">
                {selectedProject.metadata.repositoryUrl && (
                  <Link
                    href={selectedProject.metadata.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-1 text-xs"
                    )}
                  >
                    <Code2Icon className="size-3" />
                    Source
                  </Link>
                )}
                {selectedProject.metadata.projectUrl && (
                  <Link
                    href={selectedProject.metadata.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "gap-1 text-xs"
                    )}
                  >
                    <ExternalLinkIcon className="size-3" />
                    Visit project
                  </Link>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

export default ProjectsList
