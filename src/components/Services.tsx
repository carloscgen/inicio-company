import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  const { content } = useI18n()
  const { services } = useSiteContent()

  return (
    <section id='servicios' className='py-7'>
      <div className='section-shell space-y-8'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.servicesSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.servicesSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.servicesSection.description}
          </p>
        </Reveal>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal key={service.title} delay={index * 65}>
                <Card className='surface-card group h-full border-border/25 bg-primary/9 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/14 hover:shadow-md dark:hover:border-border/70 dark:hover:bg-card/70 dark:hover:shadow-sm'>
                  <CardHeader className='gap-4'>
                    <span className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/45 group-hover:bg-primary/20 group-hover:text-primary dark:group-hover:border-primary/25 dark:group-hover:bg-primary/12'>
                      <Icon className='size-5' />
                    </span>
                    <CardTitle className='text-lg'>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed text-foreground/80 dark:text-muted-foreground'>
                      {service.description}
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

export { Services }
