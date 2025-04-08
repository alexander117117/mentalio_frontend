import { useRef } from 'react'
import { colors } from '@/shared/constants/color'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface ButtonLearningProps {
  children: React.ReactNode
  isCorrect?: boolean | null
  onClick?: () => void
}

export function ButtonLearning({ children, isCorrect, onClick }: ButtonLearningProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useGSAP(() => {
    if (!buttonRef.current) return
    if (isCorrect !== null) {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          duration: 0.01,
          backgroundColor: isCorrect ? colors.correctAnswerTestButton : colors.incorrectAnswerTestButton,
          color: '#fff',
        })
      }
    } else {
      gsap.to(buttonRef.current, {
        duration: 0.01,
        clearProps: 'backgroundColor,color',
      })
    }
  }, [isCorrect])

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className="w-auto py-[1.125rem] sm:py-[0.8125rem] px-[0.625rem] bg-[#DEF3DD] rounded-[20px] hover:bg-[#c3dbc1]
                 overflow-hidden text-ellipsis whitespace-nowrap transition-colors"
    >
      {children}
    </button>
  )
}
