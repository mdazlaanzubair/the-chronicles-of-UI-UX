import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

interface ActionInterface {
  url: string
  title: string
}

interface Props {
  tag?: React.ReactNode
  title: string
  description?: string
  action?: ActionInterface | null
  footer?: React.ReactNode
  content?: React.ReactNode
}

const HorizontalCard = ({
  tag,
  title,
  description,
  action,
  footer,
  content,
}: Props) => {
  return (
    <Card className="group relative shadow-none hover:shadow">
      <CardHeader>
        <span className="eyebrow md:text-[11px]">{tag}</span>
        <CardTitle
          title={title}
          aria-label={title}
          className="truncate font-heading text-2xl font-bold tracking-wide"
        >
          {title.split(" ").slice(0, 6).join(" ")}
        </CardTitle>
        {description && (
          <CardDescription
            aria-label={description}
            title={description}
            className="line-clamp-2"
          >
            {description}
          </CardDescription>
        )}

        {action && (
          <CardAction>
            {" "}
            <Link
              href={action.url}
              target="_blank"
              title={action.title || "View"}
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-lg" }),
                "absolute top-0 right-0",
                "text-muted-foreground capitalize opacity-0",
                "group-hover:opacity-100 hover:text-secondary-foreground",
                "transition-opacity duration-300 ease-in-out"
              )}
            >
              <ExternalLinkIcon className="size-5" />
            </Link>
          </CardAction>
        )}
      </CardHeader>
      {content && (
        <CardContent className="text-lg text-muted-foreground">
          {content}
        </CardContent>
      )}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export default HorizontalCard
