import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const { content } = useI18n()
  const phrases = content.hero.rotatingPhrases
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setVisible(true)
      }, 280)
    }, 3600)
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <section id='inicio' className='relative overflow-hidden pb-24 pt-24 sm:pb-32 sm:pt-28'>
      <div className="absolute inset-0 -z-30 bg-[url('/1b.webp')] bg-cover bg-center" />
      <div className='absolute inset-0 -z-20 bg-[linear-gradient(118deg,rgba(28,35,43,0.64)_0%,rgba(20,25,32,0.66)_54%,rgba(23,28,36,0.68)_100%)] dark:bg-[linear-gradient(118deg,rgba(28,35,43,0.64)_0%,rgba(20,25,32,0.66)_54%,rgba(23,28,36,0.68)_100%)]' />

      <div className='section-shell'>
        <Reveal className='space-y-10'>
          <div className='space-y-4'>
            <SectionBadge className='border-foreground/80 bg-foreground/82 text-background dark:border-primary/30 dark:bg-background/70 dark:text-primary'>
              {content.hero.badge}
            </SectionBadge>
            <h1 className='max-w-4/5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl'>
              <span
                className={cn(
                  'text-primary transition-opacity duration-[280ms] ease-in-out',
                  visible ? 'opacity-100' : 'opacity-0'
                )}
              >
                {phrases[phraseIndex]}
              </span>{' '}
              {content.hero.titleSuffix}
            </h1>
            <p className='max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg'>
              {content.hero.description}
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <Button
              asChild
              size='lg'
              className='rounded-full border border-primary/30 bg-primary px-6 text-primary-foreground hover:bg-primary/90'
            >
              <a href='#contacto'>
                {content.hero.primaryCta}
                <ArrowRight className='size-4' />
              </a>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='rounded-full px-6 border-foreground/80 bg-foreground/82 text-background hover:bg-muted dark:text-primary'
            >
              <a href='#servicios'>{content.hero.secondaryCta}</a>
            </Button>
          </div>

          <div className='flex flex-wrap gap-3'>
            {content.hero.highlights.map((highlight) => (
              <div
                key={highlight}
                className='inline-flex items-center gap-2 rounded-full border border-foreground/80 bg-foreground/82 text-background dark:border-border/80 dark:bg-background/90 px-3 py-1.5 text-sm dark:text-foreground'
              >
                <CheckCircle2 className='size-4 text-primary' />
                {highlight}
              </div>
            ))}
          </div>
        </Reveal>

        {/* <Reveal delay={140} className='relative mx-auto w-full max-w-xl'>
          <Card className='surface-card border-border/75 bg-card/95'>
            <CardHeader className='gap-4'>
              <div className='flex items-center justify-between'>
                <Badge
                  variant='outline'
                  className='rounded-full border-border/80 bg-muted/40 px-3 py-1 text-[11px] tracking-wide text-foreground/85'
                >
                  {content.hero.previewBadge}
                </Badge>
                <span className='text-xs text-muted-foreground'>{brandConfig.name}</span>
              </div>
              <CardTitle className='text-xl'>{content.hero.previewTitle}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-3 sm:grid-cols-2'>
                {content.hero.previewMetrics.map((metric) => (
                  <div key={metric.label} className='rounded-xl border border-border/70 bg-muted/35 p-4'>
                    <p className='text-xs uppercase tracking-[0.14em] text-muted-foreground'>{metric.label}</p>
                    <p className='mt-2 text-2xl font-semibold text-foreground'>{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className='rounded-xl border border-border/70 bg-muted/25 p-4'>
                <p className='text-xs uppercase tracking-[0.14em] text-muted-foreground'>{content.hero.flowLabel}</p>
                <div className='mt-4 space-y-3'>
                  <div className='h-2 rounded-full bg-muted'>
                    <div className='h-full w-[78%] rounded-full bg-primary' />
                  </div>
                  <div className='h-2 rounded-full bg-muted'>
                    <div className='h-full w-[54%] rounded-full bg-primary/80' />
                  </div>
                  <div className='h-2 rounded-full bg-muted'>
                    <div className='h-full w-[88%] rounded-full bg-accent/90' />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal> */}
      </div>
    </section>
  )
}

export { Hero }
