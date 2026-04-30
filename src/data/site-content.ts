import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Building2,
  Compass,
  Gauge,
  Hotel,
  KeyRound,
  LayoutTemplate,
  PanelsTopLeft,
  Store,
  Utensils,
} from 'lucide-react'

import { useI18n } from '@/i18n/use-i18n'

type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
}

type SectorItem = {
  title: string
  description: string
  icon: LucideIcon
}

const serviceIcons: LucideIcon[] = [LayoutTemplate, Building2, PanelsTopLeft, BarChart3, Compass, Gauge]

const sectorIcons: LucideIcon[] = [Hotel, Utensils, KeyRound, Compass, Store, Gauge]

function useSiteContent() {
  const { content } = useI18n()

  const services: ServiceItem[] = content.services.map((service, index) => ({
    ...service,
    icon: serviceIcons[index],
  }))

  const sectors: SectorItem[] = content.sectors.map((sector, index) => ({
    ...sector,
    icon: sectorIcons[index],
  }))

  return {
    navigationItems: content.navigationItems,
    trustIdeas: content.trustIdeas,
    services,
    sectors,
    processSteps: content.processSteps,
    projectUseCases: content.projectUseCases,
    aboutHighlights: content.aboutHighlights,
    stackTags: content.stackTags,
  }
}

export { useSiteContent }
