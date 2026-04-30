import { brandConfig } from '@/config/brand'
import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { content } = useI18n()
  const { navigationItems, services } = useSiteContent()
  const featuredServices = services.slice(0, 4)

  return (
    <footer className='mt-6 border-t border-border/70 bg-foreground/5 py-10 backdrop-blur-md dark:bg-background'>
      <div className='section-shell space-y-8'>
        <div className='grid gap-8 md:grid-cols-3'>
          <div className='space-y-3 text-center md:text-left'>
            <p className='text-sm tracking-[0.18em] text-foreground/80'>{brandConfig.name}</p>
            <p className='text-sm leading-relaxed text-muted-foreground'>{content.footer.description}</p>
            <p className='text-sm text-foreground'>{brandConfig.location}</p>
          </div>

          <div className='space-y-3 text-center md:text-left'>
            <p className='text-sm font-medium text-foreground'>{content.footer.servicesTitle}</p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              {featuredServices.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div className='space-y-3 text-center md:text-left'>
            <p className='text-sm font-medium text-foreground'>{content.footer.contactTitle}</p>
            <a
              href={`mailto:${brandConfig.email}`}
              className='inline-flex justify-center text-sm text-muted-foreground transition-colors hover:text-foreground md:justify-start'
            >
              {brandConfig.email}
            </a>
            <nav className='flex flex-wrap justify-center gap-3 text-sm md:justify-start'>
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-muted-foreground transition-colors hover:text-foreground'
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left'>
          <p>
            {content.footer.copyrightPrefix} {currentYear} {brandConfig.name}. {content.footer.rightsSuffix}
          </p>
          <p>{content.footer.legalPlaceholder}</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
