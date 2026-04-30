import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'

const WorkDetail = () => {
  const { content } = useI18n()

  return (
    <section className='py-7 bg-foreground'>
      <div className='section-shell'>
        <div className='grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12'>
          <Reveal className='space-y-5' direction='up' duration={700}>
            <SectionBadge className='border-primary/95 font-semibold'>
              {content.workDetailSection.badge}
            </SectionBadge>
            <h2 className='text-balance text-3xl font-semibold tracking-tight text-background/90 sm:text-4xl'>
              {content.workDetailSection.title}
            </h2>
            <p className='text-pretty text-base leading-relaxed text-background/85 sm:text-lg'>
              {content.workDetailSection.description}
            </p>
          </Reveal>

          <Reveal delay={80} className='mx-auto lg:mx-0' direction='right' duration={760}>
            <div className='w-44 overflow-hidden rounded-2xl border border-border/75 bg-card shadow-sm lg:w-52'>
              <img
                src='/3.webp'
                alt={content.workDetailSection.imageAlt}
                className='aspect-4/5 w-full object-cover'
                loading='lazy'
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export { WorkDetail }
