"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { PublicationInterface } from "@/type"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ExternalLinkIcon } from "lucide-react"

interface ResearchViewModalProps {
  isOpen: boolean
  data: PublicationInterface | null
  onClose: () => void
}

const toDoiUrl = (doi: string | null) => {
  if (!doi) return null
  if (/^https?:\/\//i.test(doi)) return doi

  return `https://doi.org/${doi.replace(/^doi:\s*/i, "")}`
}

const ResearchViewModal = ({
  isOpen,
  data,
  onClose,
}: ResearchViewModalProps) => {
  if (!data) return null

  const { authors, title, abstract, metadata } = data
  const { status, year, doi } = metadata
  const doiUrl = toDoiUrl(doi)
  const statusLabel = status.replaceAll("_", " ")

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent className="overflow-hidden border border-border/60 bg-card sm:max-w-2xl">
        <div className="flex w-full flex-col gap-6">
          <DialogHeader className="border-b border-accent pr-10 pb-4">
            <span className="eyebrow text-[11px]">
              {year ? `${statusLabel} · ${year}` : statusLabel}
            </span>
            <DialogTitle className="leading-8 normal-case">{title}</DialogTitle>
            <DialogDescription>
              {authors.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-foreground">
                    Authors
                  </span>
                  {authors.map((author, index) => {
                    const normalizedAuthor = author.toLowerCase()
                    const isMainAuthor =
                      normalizedAuthor.includes("azlaan") ||
                      normalizedAuthor.includes("zubair")

                    return (
                      <span
                        key={`${data.id}-${author}-${index}`}
                        className={cn(
                          isMainAuthor ? "modal-tag-primary" : "modal-tag-muted"
                        )}
                      >
                        {author}
                      </span>
                    )
                  })}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-64 space-y-6 overflow-y-auto pr-2">
            <section>
              <h3 className="mb-3 font-heading text-base font-semibold text-foreground">
                Abstract
              </h3>
              <p className="text-justify text-xs leading-6 whitespace-pre-line text-muted-foreground">
                {abstract}
              </p>
            </section>
          </div>
        </div>
        {doiUrl && (
          <DialogFooter className="items-center border-t border-accent pt-4 sm:justify-between">
            <div />
            <Link
              href={doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "gap-1 text-xs")}
            >
              Read publication
              <ExternalLinkIcon className="size-3 transition-transform duration-150 group-hover/button:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ResearchViewModal
