import { cn } from "@/lib/utils"

const ExternalLink = ({
  classname = "",
  label,
  target = "_blank",
  title,
  url,
}: {
  classname?: string
  label: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  title?: string
  url: string
}) => {
  return (
    <a
      className={cn(
        "flex items-center gap-1",
        "text-sm text-muted-foreground underline underline-offset-4",
        "hover:text-primary",
        "transition-all duration-300 ease-in-out",
        classname
      )}
      href={url}
      target={target}
      rel="noopener noreferrer"
      title={title || label}
    >
      {label}
    </a>
  )
}

export default ExternalLink
