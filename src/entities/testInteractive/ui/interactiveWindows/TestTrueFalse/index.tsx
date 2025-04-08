import { QuestionsTest } from '@/entities/testInteractive/types/types'
import { ButtonLearning } from '@/shared/ui/buttons/ButtonLearning'
import { TestTextField } from '@/shared/ui/TestTextField'

interface TestTrueFalseProps {
  question: QuestionsTest
  onSelectTrueFalse: (isCorrect: boolean | null, questionId: string) => void
}
export function TestTrueFalse({ question, onSelectTrueFalse }: TestTrueFalseProps) {
  if (!question) return null
  console.log('TestTrueFalse', {
    question,
  })

  const handleSelectOption = (isCorrect: boolean | null) => {
    onSelectTrueFalse(isCorrect, question.id)
  }
  return (
    <>
      <TestTextField title="Определение" description={question.sourceWord} />

      <div className="mt-10">
        <TestTextField title="Термин" description={question.correctAnswer ?? ''} />
      </div>
      {question.options && (
        <div className="grid grid-cols-2 gap-[10px] sm:gap-5 mt-12 sm:mt-[109px]">
          <ButtonLearning
            onClick={() => handleSelectOption(question.options?.[0]?.isCorrect ?? null)}
            isCorrect={question.isChoice ? question.options?.[0]?.isCorrect : null}
          >
            Верно
          </ButtonLearning>
          <ButtonLearning
            onClick={() => handleSelectOption(question.options?.[1]?.isCorrect ?? null)}
            isCorrect={question.isChoice ? question.options?.[1]?.isCorrect : null}
          >
            Неверно
          </ButtonLearning>
        </div>
      )}
    </>
  )
}
