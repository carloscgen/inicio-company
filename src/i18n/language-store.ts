import { createContext } from "react"

import type { LanguageCode, UIText } from "@/constants/ui-text"

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (nextLanguage: LanguageCode) => void
  content: UIText
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export { LanguageContext }
export type { LanguageContextValue }
