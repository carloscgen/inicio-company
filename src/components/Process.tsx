import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Process = () => {
  const { content } = useI18n()
  const { processSteps } = useSiteContent()

  return (
    <section id='proceso' className='py-7'>
      <div className='section-shell space-y-8'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.processSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.processSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.processSection.description}
          </p>
        </Reveal>

        <div className='grid gap-4 lg:grid-cols-5'>
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <Card className='surface-card group h-full border-border/25 bg-primary/9 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/14 hover:shadow-md dark:hover:border-border/70 dark:hover:bg-card/70 dark:hover:shadow-sm'>
                <CardHeader className='gap-4'>
                  <span className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/12'>
                    {index + 1}
                  </span>
                  <CardTitle className='text-base text-foreground sm:text-lg'>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-sm leading-relaxed text-foreground/80 dark:text-muted-foreground'>
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Process }
