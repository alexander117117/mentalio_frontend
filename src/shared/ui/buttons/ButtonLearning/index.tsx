import { useRef } from 'react'
import { colors } from '@/shared/constants/color'
import gsap from 'gsap'

interface ButtonLearningProps {
  children: React.ReactNode
  isCorrect?: boolean
}

export function ButtonLearning({ children, isCorrect }: ButtonLearningProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        duration: 0.2,
        backgroundColor: isCorrect ? colors.correctAnswerTestButton : colors.incorrectAnswerTestButton,
        color: '#fff',
      })
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
