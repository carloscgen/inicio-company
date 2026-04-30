import { useCallback, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

import {
  defaultLanguage,
  languageCodes,
  textByLanguage,
  type LanguageCode,
} from "@/constants/ui-text"
import { LanguageContext } from "@/i18n/language-store"

const LANGUAGE_STORAGE_KEY = "inicio-company-language"

function isLanguageCode(value: string | null): value is LanguageCode {
  return languageCodes.some((code) => code === value)
}

function getNestedValue(target: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((currentValue, pathPart) => {
    if (
      currentValue &&
      typeof currentValue === "object" &&
      pathPart in currentValue
    ) {
      return (currentValue as Record<string, unknown>)[pathPart]
    }

    return undefined
  }, target)
}

function getInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return isLanguageCode(storedLanguage) ? storedLanguage : defaultLanguage
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const content = textByLanguage[language]

  const t = useCallback(
    (key: string) => {
      const value = getNestedValue(content, key)

      return typeof value === "string" ? value : key
    },
    [content]
  )

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      content,
      t,
    }),
    [language, content, t]
  )

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }
