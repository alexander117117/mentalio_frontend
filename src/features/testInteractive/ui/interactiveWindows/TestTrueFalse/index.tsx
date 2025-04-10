import { QuestionsTest } from '@/entities/testInteractive/types'
import { ButtonLearning } from '@/shared/ui/buttons/ButtonLearning'
import { TestTextField } from '@/shared/ui/TestTextField'
import { handleSelectAnswerProps } from '@/entities/testInteractive/types/handleSelectAnswerProps'

interface TestTrueFalseProps {
  question: QuestionsTest
  onSelectAnswer: (props: handleSelectAnswerProps) => void
}

export function TestTrueFalse({ question, onSelectAnswer }: TestTrueFalseProps) {
  if (!question) return null

  const handleSelectOption = (isCorrect: boolean | null, userChoice: string): void => {
    const { options } = question
    if (!options?.length) return

    if (isCorrect !== null) {
      onSelectAnswer({
        isCorrect,
        question,
        userChoice,
        correctAnswer: options[0]?.text || '',
      })
    }
  }

  return (
    <>
      <TestTextField title="Определение" description={question.sourceWord} />

      <div className="mt-10">
        <TestTextField title="Термин" description={question.translatedWord || ''} />
      </div>

      {question.options && (
        <div className="grid grid-cols-2 gap-[10px] sm:gap-5 mt-12 sm:mt-[109px]">
          <ButtonLearning
            onClick={() => handleSelectOption(question.options?.[0]?.isCorrect ?? null, question.options?.[0]?.text || '')}
            isCorrect={question.isChoice ? question.options?.[0]?.isCorrect : null}
          >
            {question.options?.[0]?.text || ''}
          </ButtonLearning>
          <ButtonLearning
            onClick={() => handleSelectOption(question.options?.[1]?.isCorrect ?? null, question.options?.[1]?.text || '')}
            isCorrect={question.isChoice ? question.options?.[1]?.isCorrect : null}
          >
            {question.options?.[1]?.text || ''}
          </ButtonLearning>
        </div>
      )}
    </>
  )
}
