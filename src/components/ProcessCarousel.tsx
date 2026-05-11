import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const ProcessCarousel = () => {
  const { content } = useI18n()
  const { processSteps } = useSiteContent()

  const autoplayPlugin = useRef(Autoplay({ delay: 3800, stopOnInteraction: true, stopOnMouseEnter: true }))

  return (
    <section className='py-7 overflow-hidden'>
      <div className='section-shell space-y-10'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.processSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.processSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.processSection.description}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Carousel opts={{ loop: true, align: 'start' }} plugins={[autoplayPlugin.current]} className='w-full'>
            <CarouselContent className='-ml-4'>
              {processSteps.map((step, index) => {
                const stepNumber = String(index + 1).padStart(2, '0')
                const isLast = index === processSteps.length - 1

                return (
                  <CarouselItem key={step.title} className='pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3'>
                    <div className='hover:cursor-pointer group relative flex h-full min-h-60 flex-col gap-7 rounded-2xl border border-border/40 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/5 hover:shadow-lg dark:border-border/25 dark:bg-card/50 dark:hover:border-border/55 dark:hover:bg-card/75 dark:hover:shadow-sm'>
                      {/* Step number + connector line */}
                      <div className='flex items-center gap-3'>
                        <span className='text-4xl font-bold leading-none tabular-nums text-primary transition-colors duration-300 group-hover:text-primary/65 dark:text-primary dark:group-hover:text-primary/50'>
                          {stepNumber}
                        </span>
                        {!isLast && <div className='h-px flex-1 bg-border/60 dark:bg-border/40' />}
                      </div>

                      {/* Content */}
                      <div className='space-y-3'>
                        <h3 className='text-base font-semibold leading-snug text-foreground'>{step.title}</h3>
                        <p className='text-sm leading-relaxed text-foreground/75 dark:text-muted-foreground'>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <div className='mt-8 flex items-center gap-3'>
              <CarouselPrevious className='static translate-y-0 rounded-full border-border/60 bg-background hover:bg-muted dark:border-border/40 dark:bg-card dark:hover:bg-card/80' />
              <CarouselNext className='static translate-y-0 rounded-full border-border/60 bg-background hover:bg-muted dark:border-border/40 dark:bg-card dark:hover:bg-card/80' />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}

export { ProcessCarousel }
