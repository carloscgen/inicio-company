import { ArrowRight, CheckCircle2, Mail } from 'lucide-react'

import { brandConfig } from '@/config/brand'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { SectionBadge } from './SectionBadge'

const CTA = () => {
  const { content } = useI18n()

  return (
    <section id='contacto' className='py-7'>
      <div className='section-shell'>
        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-12 mb-5'>
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
          <Reveal direction='right' duration={760}>
            <div className='relative mx-auto w-full max-w-md lg:max-w-none'>
              <div className='overflow-hidden rounded-3xl border border-border/75 bg-card shadow-sm'>
                <img
                  src='/4.webp'
                  alt={content.businessSection.mainImageAlt}
                  className='aspect-4/5 w-full object-cover'
                  loading='lazy'
                />
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className='relative overflow-hidden rounded-3xl border-2 border-border/25 bg-primary/9 px-6 py-10 shadow-[0_24px_56px_-44px_rgba(29,96,72,0.28)] dark:bg-[linear-gradient(135deg,rgba(56,66,76,0.84)_0%,rgba(61,72,83,0.8)_100%)] dark:shadow-[0_24px_56px_-42px_rgba(20,28,36,0.45)] sm:px-10 sm:py-12'>
            <div className='absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl' />

            <div className='relative z-10 max-w-3xl space-y-6'>
              <p className='text-xs font-medium uppercase tracking-[0.2em] text-foreground/65'>
                {content.ctaSection.eyebrow}
              </p>
              <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl'>
                {content.ctaSection.title}
              </h2>
              <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
                {content.ctaSection.description}
              </p>

              <div className='flex flex-wrap items-center gap-3'>
                <Button
                  asChild
                  size='lg'
                  className='rounded-full border border-primary/30 bg-primary px-6 text-primary-foreground hover:bg-primary/90'
                >
                  <a href={`mailto:${brandConfig.email}`}>
                    {content.ctaSection.primaryCta}
                    <ArrowRight className='size-4' />
                  </a>
                </Button>

                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='rounded-full border-border bg-background/92 px-6 text-foreground hover:bg-muted'
                >
                  <a href={`mailto:${brandConfig.email}`}>
                    <Mail className='size-4' />
                    {brandConfig.email}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { CTA }
