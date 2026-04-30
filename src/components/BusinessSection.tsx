import { CheckCircle2 } from 'lucide-react'

import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'

const BusinessSection = () => {
  const { content } = useI18n()

  return (
    <section className='py-7'>
      <div className='section-shell'>
        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-12'>
          <Reveal direction='left' duration={760}>
            <div className='relative mx-auto w-full max-w-md lg:max-w-none'>
              <div className='overflow-hidden rounded-3xl border border-border/75 bg-card shadow-sm'>
                <img
                  src='/2.webp'
                  alt={content.businessSection.mainImageAlt}
                  className='aspect-4/5 w-full object-cover'
                  loading='lazy'
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className='space-y-5' duration={720}>
            <SectionBadge>{content.businessSection.badge}</SectionBadge>

            <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
              {content.businessSection.title}
            </h2>

            <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {content.businessSection.description}
            </p>

            <ul className='grid gap-3 sm:grid-cols-2'>
              {content.businessSection.highlights.map((item, index) => (
                <Reveal key={item} direction='up' delay={120 + index * 70} duration={620} className='h-full'>
                  <li className='flex h-full items-center gap-2 rounded-xl border border-border/70 bg-card/70 px-3 py-2 text-sm text-foreground'>
                    <CheckCircle2 className='size-4 text-primary' />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export { BusinessSection }
