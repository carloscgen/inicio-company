import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

type SectionBadgeProps = React.ComponentProps<typeof Badge>

function SectionBadge({ className, variant = 'outline', children, ...props }: SectionBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn('rounded-full border-primary/25 bg-primary/5 px-3 py-1 text-sm text-primary', className)}
      {...props}
    >
      {children}
    </Badge>
  )
}

export { SectionBadge }
