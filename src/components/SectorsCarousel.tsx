import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const SectorsCarousel = () => {
  const { content } = useI18n()
  const { sectors } = useSiteContent()

  const autoplayPlugin = useRef(Autoplay({ delay: 3200, stopOnInteraction: true, stopOnMouseEnter: true }))

  return (
    <section className='py-7 overflow-hidden'>
      <div className='section-shell space-y-10'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.sectorsSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.sectorsSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.sectorsSection.description}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Carousel opts={{ loop: true, align: 'start' }} plugins={[autoplayPlugin.current]} className='w-full'>
            <CarouselContent className='-ml-4'>
              {sectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <CarouselItem
                    key={sector.title}
                    className='hover:cursor-pointer pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3'
                  >
                    <div className='group flex h-full flex-col gap-5 rounded-2xl border border-primary/20 bg-primary/6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg dark:border-border/30 dark:bg-card/60 dark:hover:border-border/60 dark:hover:bg-card/80 dark:hover:shadow-sm'>
                      <div className='inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/15'>
                        <Icon className='size-5' />
                      </div>
                      <div className='space-y-2'>
                        <h3 className='text-base font-semibold text-foreground'>{sector.title}</h3>
                        <p className='text-sm leading-relaxed text-foreground/75 dark:text-muted-foreground'>
                          {sector.description}
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

export { SectorsCarousel }
