import { deText } from '@/constants/translations/de'
import { enText } from '@/constants/translations/en'
import { esText } from '@/constants/translations/es'

export const brandConfig = {
  name: 'BRAND_NAME',
  location: 'Presencial / Online',
  email: 'hola@brand.com',
} as const

export const languageCodes = ['es', 'en', 'de'] as const

export type LanguageCode = (typeof languageCodes)[number]

export const textByLanguage = {
  es: esText,
  en: enText,
  de: deText,
} as const

export type UIText = (typeof textByLanguage)[LanguageCode]

export const defaultLanguage: LanguageCode = 'es'
