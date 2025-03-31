import { useState, useRef } from 'react'
import { getDropdownClassName } from '@/shared/lib/classNames'
import { DropdownHeader } from './components/DropdownHeader'
import { DropdownContent } from './components/DropdownContent'
interface DropdownProps {
  title: string
  svgImg?: React.ReactNode
  isPrimaryDropdown?: boolean
  children?: React.ReactNode
}
export function Dropdown({ title, svgImg, isPrimaryDropdown = true, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }
  
  const dropdownClassName = getDropdownClassName({ isPrimaryDropdown, isOpen });

  return (
    <div
      className={dropdownClassName}
      ref={dropdownRef}
    >
      <DropdownHeader 
        title={title} 
        svgImg={svgImg} 
        isOpen={isOpen} 
        onToggle={handleToggle} 
      />

      <DropdownContent isOpen={isOpen}>
        {children}
      </DropdownContent>
    </div>
  )
}

