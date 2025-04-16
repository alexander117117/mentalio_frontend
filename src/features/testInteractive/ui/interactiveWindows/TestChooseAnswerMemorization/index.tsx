import { QuestionsMultipleChoice, QuestionsTest } from '@/entities/testInteractive/types'
import { ButtonLearning } from '@/shared/ui/buttons/ButtonLearning'
import { handleSelectAnswerProps } from '@/entities/testInteractive/types/handleSelectAnswerProps'
import styles from '@/shared/lib/classNames/index.module.css'
import { useDispatch } from 'react-redux'
import { setSelectedOptionIndex } from '@/entities/testInteractive/store/slice'

interface TestChooseAnswerMemorizationProps {
  question: QuestionsMultipleChoice
  onSelectAnswer: (props: handleSelectAnswerProps) => void
}

const getCorrectAnswerText = (question: QuestionsTest | QuestionsMultipleChoice): string => {
  if (!question.options?.length) return ''
  const correctOption = question.options.find((option) => option.isCorrect)
  return correctOption?.text || ''
}

export const TestChooseAnswerMemorization = ({ question, onSelectAnswer }: TestChooseAnswerMemorizationProps) => {
  const dispatch = useDispatch()

  if (!question) return null

  const handleSelectOption = (isCorrect: boolean | null, optionIndex: number): void => {
    const { options } = question
    if (!options?.length) return
    if (isCorrect === null) return

    // 1) В Redux запоминаем, какой индекс пользователь нажал
    dispatch(setSelectedOptionIndex({ id: question.id, selectedIndex: optionIndex }))

    // 2) Дополнительно вызываем логику onSelectAnswer
    onSelectAnswer({
      isCorrect,
      question,
      userChoice: options[optionIndex].text,
      correctAnswer: getCorrectAnswerText(question),
    })
  }

  const renderOptions = () => {
    if (!question.options?.length) return null

    return (
      <div className="mt-24 sm:mt-[126px] grid grid-cols-2 gap-x-[10px] sm:gap-x-5 gap-y-[10px]">
        {question.options.map((option, index) => {
          const isButtonCorrect = question.selectedOptionIndex === index ? option.isCorrect : null

          return (
            <ButtonLearning
              key={`option-${index}-${option.text}`}
              isCorrect={isButtonCorrect}
              onClick={() => handleSelectOption(option.isCorrect, index)}
            >
              {option.text}
            </ButtonLearning>
          )
        })}
      </div>
    )
  }

  return (
    <div className={styles.flashcard__content}>
      <h1 className={styles.flashcard__title}>{question.sourceWord}</h1>
      {renderOptions()}
    </div>
  )
}
