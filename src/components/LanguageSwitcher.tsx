import { useId } from 'react'
import { useI18n } from '../i18n'

export const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales, translation } = useI18n()
  const selectId = useId()

  return (
    <div className="language-switcher">
      <label className="language-switcher__label" htmlFor={selectId}>
        {translation.layout.languageSwitcherLabel}
      </label>
      <select
        id={selectId}
        value={locale}
        onChange={(event) =>
          setLocale(event.target.value as (typeof availableLocales)[number]['code'])
        }
      >
        {availableLocales.map(({ code, nativeName }) => (
          <option key={code} value={code}>
            {nativeName}
          </option>
        ))}
      </select>
    </div>
  )
}
