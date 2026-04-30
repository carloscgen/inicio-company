import { Link2, RefreshCcw, ShieldCheck } from 'lucide-react'

import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const trustIcons = [Link2, RefreshCcw, ShieldCheck]

const Positioning = () => {
  const { content } = useI18n()
  const { trustIdeas } = useSiteContent()

  return (
    <section className='pt-12 sm:pt-16'>
      <div className='section-shell space-y-8'>
        <Reveal className='surface-card border-primary/25 bg-primary/9 p-6 sm:p-8 dark:border-border/70 dark:bg-card/70'>
          <p className='eyebrow text-primary/85 dark:text-foreground/65'>{content.positioning.eyebrow}</p>
          <p className='mt-3 text-pretty text-xl leading-relaxed text-primary/95 dark:text-foreground sm:text-2xl'>
            {content.positioning.statement}
          </p>
        </Reveal>

        <div className='grid gap-4 md:grid-cols-3'>
          {trustIdeas.map((idea, index) => {
            const Icon = trustIcons[index]

            return (
              <Reveal key={idea.title} delay={index * 90}>
                <Card className='surface-card group h-full border-border/25 bg-primary/9 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/14 hover:shadow-md dark:hover:border-border/70 dark:hover:bg-card/70 dark:hover:shadow-sm'>
                  <CardHeader className='gap-4'>
                    <span className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/12'>
                      <Icon className='size-4' />
                    </span>
                    <CardTitle className='text-lg'>{idea.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed text-muted-foreground'>
                      {idea.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Positioning }
