import { useRef } from 'react'

interface ButtonLearningProps {
  children: React.ReactNode
  isCorrect?: boolean
}

export function ButtonLearning({ children, isCorrect }: ButtonLearningProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleClick = () => {
    if (buttonRef.current) {
      if(isCorrect){
        buttonRef.current.style.background = '#24AC18'
      }
      else{
        buttonRef.current.style.background = '#FC3230'
      }
      buttonRef.current.style.color = '#fff'
    }
  }
  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="w-auto py-[1.125rem] sm:py-[0.8125rem] px-[0.625rem] bg-[#DEF3DD] rounded-[20px] hover:bg-[#c3dbc1] overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {children}
    </button>
  )
}


