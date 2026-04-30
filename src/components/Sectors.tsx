import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Sectors = () => {
  const { content } = useI18n()
  const { sectors } = useSiteContent()

  return (
    <section className='py-7'>
      <div className='section-shell space-y-8'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.sectorsSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.sectorsSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.sectorsSection.description}
          </p>
        </Reveal>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-6'>
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            const isFeatured = index === 0 || index === 3

            return (
              <Reveal key={sector.title} delay={index * 70} direction='up'>
                <Card
                  className={`surface-card group h-full border-border/25 bg-primary/9 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/14 hover:shadow-md dark:hover:border-border/70 dark:hover:bg-card/80 dark:hover:shadow-sm ${
                    isFeatured ? 'sm:col-span-2 lg:col-span-3' : 'sm:col-span-1 lg:col-span-2'
                  }`}
                >
                  <CardHeader className='gap-4 pb-3'>
                    <span className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/12'>
                      <Icon className='size-4' />
                    </span>
                    <CardTitle className='text-base sm:text-lg'>{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed text-foreground/80 dark:text-muted-foreground'>
                      {sector.description}
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

export { Sectors }
