import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const DIRECTION_CLASS_MAP = {
  up: 'scroll-reveal--up',
  left: 'scroll-reveal--left',
  right: 'scroll-reveal--right',
} as const

type RevealDirection = keyof typeof DIRECTION_CLASS_MAP

const Reveal = ({
  className,
  delay = 0,
  duration = 700,
  direction = 'up',
  ...props
}: React.ComponentProps<'div'> & { delay?: number; duration?: number; direction?: RevealDirection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const target = elementRef.current

    if (!target) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.46, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={cn('scroll-reveal', DIRECTION_CLASS_MAP[direction], isVisible && 'scroll-reveal--visible', className)}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      {...props}
    />
  )
}

export { Reveal }
