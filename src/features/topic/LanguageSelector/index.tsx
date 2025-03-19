import { useEffect, useRef, useState } from 'react'
import style from './index.module.css'
import { LANGUAGES } from '@/features/topic/CreateWordForm/lib/const'
import { Leng } from '@/entities/topic/lib/types'

interface LanguageSelectorProps {
  primaryLang: Leng
  onChangeLanguage: (lang: Leng) => void
}

export function LanguageSelector({ primaryLang, onChangeLanguage }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [chosenLanguage, setChosenLanguage] = useState<Leng>(primaryLang)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelectLanguage = (lang: Leng) => {
    onChangeLanguage(lang)
    setChosenLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className={style.languageSelector}>
      <button type="button" onClick={toggleDropdown} className={style.languageSelector__button}>
        {chosenLanguage}
      </button>

      {isOpen && (
        <div className={style.languageSelector__popup} ref={popupRef}>
          <div className={style.languageSelector__popupGrid}>
            {LANGUAGES.map((item) => (
              <button
                key={item.value}
                className={style.languageSelector__item}
                onClick={() => handleSelectLanguage(item.value as Leng)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
