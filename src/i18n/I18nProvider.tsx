import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  I18nContext,
  detectInitialLocale,
  locales,
  storageKey,
  type I18nContextValue,
  type Locale,
} from './context'

const getAvailableLocales = (): I18nContextValue['availableLocales'] =>
  (Object.entries(locales) as Array<[Locale, I18nContextValue['translation']]>).map(
    ([code, translation]) => ({
      code,
      label: translation.language.label,
      nativeName: translation.language.nativeName,
    }),
  )

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => detectInitialLocale())

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, locale)
    }
  }, [locale])

  const availableLocales = useMemo(getAvailableLocales, [])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      translation: locales[locale],
      availableLocales,
    }),
    [availableLocales, locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export default I18nProvider
