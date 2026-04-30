import { useEffect, useRef, useState } from 'react'
import { Menu, MoonStar, Sun, X } from 'lucide-react'

import { brandConfig } from '@/config/brand'
import type { LanguageCode } from '@/constants/ui-text'
import { useSiteContent } from '@/data/site-content'
import { useI18n } from '@/i18n/use-i18n'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const languageOptions: Array<{
  code: LanguageCode
  label: string
  flagSrc: string
}> = [
  { code: 'es', label: 'ES', flagSrc: '/flags-es.svg' },
  { code: 'en', label: 'EN', flagSrc: '/flags-gb.svg' },
  { code: 'de', label: 'DE', flagSrc: '/flags-de.svg' },
]

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const { content, language, setLanguage, t } = useI18n()
  const { navigationItems } = useSiteContent()

  const selectedLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[0]

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300',
        isScrolled ? 'border-transparent bg-transparent' : 'border-border/80 bg-background/90'
      )}
    >
      <div className='section-shell flex h-24 items-center justify-between gap-4'>
        <a href='#inicio' className='group inline-flex items-center gap-3'>
          <span className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background/75 text-sm font-semibold text-primary transition-transform group-hover:scale-105'>
            {content.header.logoMark}
          </span>
          <div className='leading-tight'>
            <p className='text-xs tracking-[0.18em] text-foreground/80 sm:text-sm'>{content.header.studioLabel}</p>
            <p className='font-semibold text-foreground'>{brandConfig.name}</p>
          </div>
        </a>

        <nav className='hidden items-center gap-6 lg:flex'>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-base text-foreground/80 transition-colors hover:text-foreground'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2 sm:gap-3'>
          <label className='sr-only' htmlFor='language-selector'>
            {t('header.languageSelectorAria')}
          </label>
          <Select value={language} onValueChange={(val) => setLanguage(val as LanguageCode)}>
            <SelectTrigger
              id='language-selector'
              aria-label={t('header.languageSelectorAria')}
              className='h-10 w-auto rounded-full border-border bg-background/75 px-3 text-xs font-medium hover:bg-muted focus:ring-ring'
            >
              <span className='flex items-center gap-2'>
                <img
                  src={selectedLanguage.flagSrc}
                  alt=''
                  aria-hidden='true'
                  className='h-4 w-6 rounded-[2px] border border-black/10 object-cover'
                />
                <span>{selectedLanguage.label}</span>
              </span>
            </SelectTrigger>
            <SelectContent position='popper'>
              {languageOptions.map((option) => (
                <SelectItem key={option.code} value={option.code}>
                  <span className='flex items-center gap-2'>
                    <img
                      src={option.flagSrc}
                      alt=''
                      aria-hidden='true'
                      className='h-4 w-6 rounded-[2px] border border-black/10 object-cover'
                    />
                    {option.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <button
            type='button'
            className='inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background/75 px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted'
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? t('header.themeSwitchToDarkAria') : t('header.themeSwitchToLightAria')}
          >
            {theme === 'light' ? (
              <>
                <MoonStar className='size-4' />
                <span className='hidden sm:inline'>{content.header.themeDarkLabel}</span>
              </>
            ) : (
              <>
                <Sun className='size-4' />
                <span className='hidden sm:inline'>{content.header.themeLightLabel}</span>
              </>
            )}
          </button>

          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/75 text-foreground transition-colors hover:bg-muted lg:hidden'
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-expanded={isMenuOpen}
            aria-label={t('header.openNavigationAria')}
          >
            {isMenuOpen ? <X className='size-4' /> : <Menu className='size-4' />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className='section-shell pb-5 lg:hidden'>
          <div className='surface-card flex flex-col gap-2 border-border/80 bg-card/95 p-4'>
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='rounded-lg px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-muted/70 hover:text-foreground'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button
              asChild
              className='mt-2 rounded-full border border-primary/30 bg-primary text-primary-foreground hover:bg-primary/90'
            >
              <a href='#contacto' onClick={() => setIsMenuOpen(false)}>
                {t('header.projectCta')}
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export { Header }
