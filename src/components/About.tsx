import { brandConfig } from '@/config/brand'
import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { Reveal } from '@/components/Reveal'
import { SectionBadge } from '@/components/SectionBadge'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  const { content } = useI18n()
  const { aboutHighlights, stackTags } = useSiteContent()

  const aboutParagraphs = content.aboutSection.paragraphs.map((paragraph) =>
    paragraph.replace('{brand}', brandConfig.name)
  )

  return (
    <section id='sobre-mi' className='py-7'>
      <div className='section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <Reveal>
          <Card className='surface-card border-border/70 bg-card/70'>
            <CardHeader className='gap-3'>
              <SectionBadge className='w-fit'>
                {content.aboutSection.badgePrefix} {brandConfig.name}
              </SectionBadge>
              <CardTitle className='text-3xl tracking-tight sm:text-4xl'>{content.aboutSection.title}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-5'>
              <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
                {aboutParagraphs[0]}
              </p>
              <p className='text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
                {aboutParagraphs[1]}
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={110}>
          <Card className='surface-card border-border/70 bg-card/70'>
            <CardHeader className='gap-4'>
              <CardTitle className='text-xl'>{content.aboutSection.expectationsTitle}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <ul className='space-y-3'>
                {aboutHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className='rounded-xl border border-border/70 bg-muted/25 px-3 py-2 text-sm text-foreground/85'
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className='space-y-3'>
                <CardDescription className='text-sm font-medium text-foreground'>
                  {content.aboutSection.stackTitle}
                </CardDescription>
                <div className='flex flex-wrap gap-2'>
                  {stackTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant='outline'
                      className='rounded-full border-border/80 bg-muted/30 px-3 text-foreground/80'
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export { About }
