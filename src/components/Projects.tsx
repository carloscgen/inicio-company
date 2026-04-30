import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BriefcaseBusiness, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'

const Projects = () => {
  const { content } = useI18n()
  const { projectUseCases } = useSiteContent()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateScrollState = () => {
    const track = trackRef.current
    if (!track) return
    const tolerance = 4
    setCanScrollPrev(track.scrollLeft > tolerance)
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - tolerance)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updateScrollState()
    track.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      track.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [projectUseCases.length])

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.82, 320), behavior: 'smooth' })
  }

  return (
    <section id='proyectos' className='py-7'>
      <div className='section-shell space-y-6'>
        <Reveal className='max-w-3xl space-y-3'>
          <SectionBadge>{content.projectsSection.badge}</SectionBadge>
          <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
            {content.projectsSection.title}
          </h2>
          <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {content.projectsSection.description}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <div className='mb-4 flex items-center justify-between'>
            <div className='flex items-center gap-2 text-xs text-muted-foreground md:hidden'>
              <ArrowRight className='size-3.5' />
              {content.projectsSection.scrollHint}
            </div>
            <div className='ml-auto hidden items-center gap-2 md:flex'>
              <button
                type='button'
                className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-45'
                onClick={() => scrollByAmount(-1)}
                disabled={!canScrollPrev}
                aria-label={content.projectsSection.scrollPrevAria}
              >
                <ChevronLeft className='size-4' />
              </button>
              <button
                type='button'
                className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-45'
                onClick={() => scrollByAmount(1)}
                disabled={!canScrollNext}
                aria-label={content.projectsSection.scrollNextAria}
              >
                <ChevronRight className='size-4' />
              </button>
            </div>
          </div>

          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-linear-to-r from-background to-transparent md:block' />
            <div className='pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-linear-to-l from-background to-transparent md:block' />

            <div
              ref={trackRef}
              className='flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            >
              {projectUseCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className='group min-w-72 shrink-0 snap-start rounded-3xl border border-border/60 bg-linear-to-b from-card via-card to-primary/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:from-primary/8 hover:via-primary/10 hover:to-primary/16 hover:shadow-md dark:hover:border-border/60 dark:hover:from-card dark:hover:via-card dark:hover:to-primary/5 dark:hover:shadow-sm sm:min-w-84'
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className='mb-3 flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/12'>
                        <BriefcaseBusiness className='size-4' />
                      </span>
                      <h3 className='text-base font-semibold leading-snug text-foreground'>{useCase.title}</h3>
                    </div>
                    <span className='inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-muted-foreground'>
                      <Sparkles className='size-3' />
                      {index + 1}
                    </span>
                  </div>
                  <p className='mb-3 line-clamp-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/65'>
                    {useCase.businessType}
                  </p>
                  <p className='text-sm leading-relaxed text-muted-foreground'>{useCase.problem}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { Projects }
