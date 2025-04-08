import styles from '@/shared/lib/classNames/index.module.css'
import { QuestionsMultipleChoice, QuestionsTest } from '@/entities/testInteractive/types/types'
import { ButtonLearning } from '@/shared/ui/buttons/ButtonLearning'

interface TestChooseAnswerProps {
  question: QuestionsTest | QuestionsMultipleChoice
  onSelectAnswer: (isCorrect: boolean | null, questionId: string) => void
}

export function TestChooseAnswer({ question, onSelectAnswer }: TestChooseAnswerProps) {
  if (!question) return null
  console.log('TestChooseAnswer', {
    question,
  })

  const handleSelectOption = (isCorrect: boolean | null) => {
    onSelectAnswer(isCorrect, question.id)
  }

  return (
    <div className={styles.flashcard__content}>
      <h1 className={styles.flashcard__title}>{question.sourceWord}</h1>

      {question.options && (
        <div className="mt-24 sm:mt-[126px] grid grid-cols-2 gap-x-[10px] sm:gap-x-5 gap-y-[10px]">
          {question.options.map((item, index) => (
            <ButtonLearning
              key={index}
              isCorrect={question.isChoice ? item.isCorrect : null}
              onClick={() => handleSelectOption(item.isCorrect)}
            >
              {item.text}
            </ButtonLearning>
          ))}
        </div>
      )}
    </div>
  )
}
