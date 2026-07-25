import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  children?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  onCardClick?: () => void
}

const HorizontalCard = ({
  children,
  className,
  header,
  footer,
  onCardClick,
}: Props) => {
  return (
    <Card
      onClick={onCardClick}
      className={cn(
        "group relative shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
    >
      {header && <CardHeader>{header}</CardHeader>}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export default HorizontalCard
