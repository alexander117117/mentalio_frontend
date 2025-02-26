import { useEffect, useRef, useState } from "react";
import style from "./index.module.css"
export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const testData = [
    "Русский",
    "Английский",
    "Испанский",
    "Французский",
    "Португальский",
    "Немецкий",
    "Арабский",
  ];

  return (
    <div className={style.languageSelector}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={style.languageSelector__button}
      >
        Рус
      </button>

      {isOpen && (
        <div className={style.languageSelector__popup} ref={languageRef}>
          <div className={style.languageSelector__popupGrid}>
            {testData.map((item, index) => (
              <div
                key={index}
                className={style.languageSelector__item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}