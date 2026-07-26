import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PublicationInterface } from "@/type"
import {
  XIcon,
  GlobeIcon,
  FileTextIcon,
  BookOpenTextIcon,
  DotIcon,
  CalendarDaysIcon,
  GlassesIcon,
  CalendarCheckIcon,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

const ResearchContent = ({
  data,
  onClose,
}: {
  data: PublicationInterface
  onClose: () => void
}) => {
  const { authors, title, abstract, metadata } = data
  const { status, journal, year, doi } = metadata

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Modal Header */}
      <DialogHeader className="mb-0 flex flex-row items-start justify-between border-b border-foreground/30 pb-4">
        {/* Research Header */}
        <div className="flex flex-col space-y-1.5">
          <span className="eyebrow text-[11px]">
            {status.replace("_", " ")}
          </span>
          <h1 className="modal-title">{title}</h1>

          <div className="flex flex-wrap items-center gap-2">
            {(() => {
              if (status === "in_preparation") {
                return (
                  <>
                    <FileTextIcon className="size-3" />
                    <span className="text-xs text-foreground">
                      Manuscript in Preparation
                    </span>
                  </>
                )
              }

              if (status === "submitted") {
                return (
                  <>
                    <CalendarDaysIcon className="size-3" />
                    <span className="text-xs text-foreground">{`Submitted in ${year}`}</span>
                  </>
                )
              }

              if (status === "under_review") {
                return (
                  <>
                    <GlassesIcon className="size-3" />
                    <span className="text-xs text-foreground">
                      Under Review
                    </span>
                  </>
                )
              }

              if (status === "accepted") {
                return (
                  <>
                    <CalendarCheckIcon className="size-3" />
                    <span className="text-xs text-foreground">{`Accepted in ${year}`}</span>
                  </>
                )
              }

              if (status === "published") {
                return (
                  <>
                    <CalendarDaysIcon className="size-3" />
                    <span className="text-xs text-foreground">{`Published in ${year}`}</span>
                  </>
                )
              }
            })()}

            {journal && (
              <>
                <DotIcon className="size-3" />
                <div className="flex items-center gap-2">
                  <BookOpenTextIcon className="size-3" />
                  <span className="text-xs text-foreground">{journal}</span>
                </div>
              </>
            )}

            {doi && (
              <>
                <DotIcon className="size-3" />
                <div className="flex items-center gap-2">
                  <GlobeIcon className="size-3" />
                  <Link
                    href={doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-xs text-primary underline underline-offset-2"
                    )}
                  >
                    View publication
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="shrink-0 text-muted-foreground hover:text-foreground"
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close modal</span>
        </Button>
      </DialogHeader>

      {/* Modal Body */}
      {/* Abstract Section */}
      <div className="space-y-6">
        <h3 className="mb-3 text-lg font-semibold text-foreground">Abstract</h3>
        <div className="h-[45vh] max-h-[50vh] overflow-y-auto pe-3">
          <p className="text-justify font-serif text-xs leading-6 text-foreground/90">
            {abstract}
          </p>
        </div>
      </div>

      {/* Modal Footer */}
      {/* Authors List */}
      <div className="flex flex-wrap items-center gap-2 border-t border-foreground/30 pt-4">
        <span className="modal-tag">Authors:</span>

        {authors.length <= 0 ? (
          <span className="modal-tag">No authors</span>
        ) : (
          authors.map((author, idx) => {
            const isMainAuthor =
              author.toLowerCase().includes("azlaan") ||
              author.toLowerCase().includes("zubair")
            return (
              <span
                key={`modal-author-${idx}-${title}`}
                className={cn(
                  isMainAuthor ? "modal-tag-primary" : "modal-tag-muted"
                )}
              >
                {author}
              </span>
            )
          })
        )}
      </div>
    </div>
  )
}

export default ResearchContent
