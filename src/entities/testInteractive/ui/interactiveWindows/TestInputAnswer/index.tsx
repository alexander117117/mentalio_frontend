import { useState } from 'react'
import { QuestionsTest } from '@/entities/testInteractive/types/types'
import { Id } from '@/shared/types'
import { FaArrowRight } from 'react-icons/fa6'

interface TestInputAnswerProps {
  question: QuestionsTest
  onSelectAnswer: (isCorrect: boolean | null, questionId: Id) => void
}

export function TestInputAnswer({ question, onSelectAnswer }: TestInputAnswerProps) {
  const [userAnswer, setUserAnswer] = useState('')

  if (!question) return null
  console.log('TestInputAnswer', {
    question,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value)
  }

  const handleSubmit = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === (question.correctAnswer?.trim().toLowerCase() || '')

    onSelectAnswer(isCorrect, question.id)
  }

  return (
    <>
      <div className="flex items-center justify-center pt-[141px]">
        <span className="text-3xl sm:text-4xl text-center">{question.sourceWord}</span>
      </div>

      <div className="h-[50px] mt-[107px] sm:mt-[151px] px-0 sm:px-[28px] flex gap-[10px] sm:gap-3">
        <input
          type="text"
          value={userAnswer}
          onChange={handleChange}
          className="w-full bg-[#DEF3DD] py-[13px] px-5 outline-none rounded-[10px] placeholder-[#878787]"
          placeholder="Введите ответ"
        />
        <button
          onClick={handleSubmit}
          className="bg-primaryOpacity height-full w-[74px] sm:w-[131px]
                     flex items-center justify-center rounded-[10px]
                     text-white"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  )
}
