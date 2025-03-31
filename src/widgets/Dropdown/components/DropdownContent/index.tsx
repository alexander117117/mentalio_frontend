import cn from 'classnames'

interface DropdownContentProps {
  isOpen: boolean
  children: React.ReactNode
}
export function DropdownContent({ isOpen, children }: DropdownContentProps) {
  return (
    <div className={cn('mt-5 transition-all duration-250 ease-linear', 
      { 
        'opacity-100 translate-y-0': isOpen, 
        'opacity-0 -translate-y-2': !isOpen 
      })}
    >
      {children}
    </div>
  )
}