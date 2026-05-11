import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const ProjectsCarousel = () => {
  const { content } = useI18n()
  const { projectUseCases } = useSiteContent()

  const autoplayPlugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true }))

  return (
    <section id='proyectos' className='overflow-hidden py-7'>
      <div className='section-shell space-y-10'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.projectsSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.projectsSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.projectsSection.description}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Carousel opts={{ loop: true, align: 'start' }} plugins={[autoplayPlugin.current]} className='w-full'>
            <CarouselContent className='-ml-4'>
              {projectUseCases.map((project) => (
                <CarouselItem key={project.title} className='pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3'>
                  <div className='group relative h-80 overflow-hidden rounded-2xl'>
                    {/* Background image */}
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105'
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    {/* Fallback bg if image missing */}
                    <div className='absolute inset-0 bg-foreground/35 dark:bg-card/65' />

                    {/* Gradient overlay — bottom-heavy for legibility */}
                    {/* <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/40' /> */}

                    {/* Content */}
                    <div className='absolute inset-x-0 bottom-0 p-5'>
                      <h3 className='text-xl font-semibold leading-snug text-white drop-shadow-sm'>{project.title}</h3>
                      <p className='mt-1.5 text-base leading-normal text-white/80'>{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
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

export { ProjectsCarousel }
