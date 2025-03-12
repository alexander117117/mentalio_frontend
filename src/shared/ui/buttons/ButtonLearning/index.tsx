import { useRef } from "react"

interface ButtonLearningProps{
  children: React.ReactNode
}

export function ButtonLearning({ children }: ButtonLearningProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const test = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = '#24AC18'
      buttonRef.current.style.color = '#fff'
    }
  }
  return (
    <button 
      ref={buttonRef}
      onClick={test}
      className="w-auto py-[1.125rem] sm:py-[0.8125rem] px-[0.625rem] bg-[#DEF3DD] rounded-[20px] hover:bg-[#c3dbc1] overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {children}
    </button>
  )
}
