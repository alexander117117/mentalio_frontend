import { FaChevronRight } from 'react-icons/fa6'
import cn from 'classnames'

interface DropdownHeaderProps {
  title: string
  svgImg?: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}
export function DropdownHeader({ title, svgImg, isOpen, onToggle }: DropdownHeaderProps) {
  return (
    <div className="flex items-center justify-between" onClick={onToggle}>
      <div className="flex items-center gap-5">
        {svgImg && <div className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] svg-icon">{svgImg}</div>}
        <span className="text-base sm:text-lg font-medium">{title}</span>
      </div>
      <FaChevronRight
        className={cn('transition-transform duration-250', {
          'rotate-90': isOpen,
          'rotate-0': !isOpen,
        })}
      />
    </div>
  )
}
