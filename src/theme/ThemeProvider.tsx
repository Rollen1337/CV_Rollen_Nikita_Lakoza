import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext, type ResolvedTheme, type ThemeMode } from './context'

const STORAGE_KEY = 'cv-template:theme'

const getInitialMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }

  return 'system'
}

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setModeState] = useState<ThemeMode>(() => getInitialMode())
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      setSystemTheme(media.matches ? 'dark' : 'light')
    }

    handleChange()
    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  const resolvedTheme: ResolvedTheme = mode === 'system' ? systemTheme : mode

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const root = document.documentElement

    if (mode === 'system') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', mode)
    }

    root.setAttribute('data-theme-resolved', resolvedTheme)
  }, [mode, resolvedTheme])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode)
  }, [])

  const value = useMemo(
    () => ({
      mode,
      resolvedTheme,
      setMode,
    }),
    [mode, resolvedTheme, setMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

