import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  tag?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  footer?: React.ReactNode
  content?: React.ReactNode
}

const VerticalCard = ({
  tag,
  title,
  description,
  action,
  footer,
  content,
}: Props) => {
  return (
    <Card className="group h-90 shadow-none hover:shadow">
      <CardHeader>
        {tag && tag}
        <CardTitle
          title={title}
          aria-label={title}
          className="font-heading text-2xl font-bold tracking-wide"
        >
          {title}
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

        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      {content && <CardContent>{content}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export default VerticalCard
