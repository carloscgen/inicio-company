import { useEffect, useState } from 'react'

import { BusinessSection } from '@/components/BusinessSection'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Process } from '@/components/Process'
import { Projects } from '@/components/Projects'
import { Positioning } from '@/components/Positioning'
import { Sectors } from '@/components/Sectors'
import { Services } from '@/components/Services'
import { WorkDetail } from '@/components/WorkDetail'
import { LanguageProvider } from '@/i18n/language-context'

type ThemeMode = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const root = document.documentElement
    const isDark = theme === 'dark'

    root.classList.toggle('dark', isDark)
    root.style.colorScheme = isDark ? 'dark' : 'light'
  }, [theme])

  return (
    <LanguageProvider>
      <div className='relative min-h-screen overflow-x-clip'>
        <Header
          theme={theme}
          onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
        />
        <main className='pb-8 pt-24'>
          <Hero />
          <Positioning />
          <BusinessSection />
          <WorkDetail />
          <Services />
          <Sectors />
          <Process />
          <Projects />
          {/* <About /> */}
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
