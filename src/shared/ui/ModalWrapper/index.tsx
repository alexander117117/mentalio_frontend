import React from 'react'

/**
 * ModalWrapper - Компонент-обёртка для модального окна.
 *
 * Этот компонент предоставляет возможность отображения модального окна,
 * которое адаптируется по ширине и высоте относительно содержимого.
 *
 * - Центрируется на экране.
 * - Ограничивает ширину и высоту для предотвращения переполнения.
 * - Поддерживает прокрутку при переполнении содержимого.
 *
 * Поддерживает закрытие по клику на фон.
 *
 * @component
 *
 * @param {Object} props - Свойства компонента.
 * @param {boolean} props.isOpen - Определяет, открыто ли модальное окно.
 * Если значение `false`, компонент не рендерится.
 * @param {function} props.onClose - Функция-обработчик, вызываемая при закрытии окна.
 * Вызывается при клике на фон или на кнопку закрытия.
 * @param {React.ReactNode} props.children - Контент, который будет отображён внутри модального окна.
 *
 * @example
 * // Пример использования компонента ModalWrapper
 *
 * const App = () => {
 *   const [isModalOpen, setIsModalOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</button>
 *       <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
 *         <h1>Пример содержимого</h1>
 *       </ModalWrapper>
 *     </>
 *   );
 * };
 *
 */

interface ModalWrapperProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const ModalWrapper = ({ isOpen, onClose, children }: ModalWrapperProps) => {
  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`} onClick={onClose}>
      <div
        className={`relative bg-[#111] rounded-lg shadow-lg pt-6 p-3 sm:p-10 w-[95%] sm:w-auto md:max-w-[95%] max-h-[75vh] xs:max-w-[90%] xs:max-h-[75%] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
