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
      userChoice: question.options?.[optionIndex]?.text ?? '',
      correctAnswer: getCorrectAnswerText(question),
    })
  }
  if (!question.options?.length) {
    return <div>Нет вариантов ответа</div>
  }

  // Находим индекс правильного варианта
  const correctIndex = question.options.findIndex((option) => option.isCorrect)

  /**
   * Рендерим кнопки, в зависимости от user selection и correctIndex
   * Если question.selectedOptionIndex === null => ни одна кнопка не подсвечивается
   * Если user выбрал correct => подсвечиваем только выбранную (green)
   * Если user выбрал wrong => выбранная (red), а correct (green)
   */
  const renderOptions = question.options.map((option, index) => {
    // По умолчанию — нет подсветки:
    let isButtonCorrect: boolean | null = null

    // Если пользователь выбрал что-то
    if (question.selectedOptionIndex !== null && question.selectedOptionIndex !== undefined) {
      const userPick = question.selectedOptionIndex
      // Пользователь выбрал верный ответ?
      if (userPick === correctIndex) {
        // Подсвечиваем только correctIndex (зелёным), остальные null
        if (index === correctIndex) {
          isButtonCorrect = true
        }
      } else {
        // Пользователь выбрал НЕправильный вариант
        if (index === correctIndex) {
          // Правильный вариант - зелёный
          isButtonCorrect = true
        } else if (index === userPick) {
          // Выбранный вариант - красный
          isButtonCorrect = false
        }
      }
    }

    return (
      <ButtonLearning
        key={`option-${index}-${option.text}`}
        isCorrect={isButtonCorrect}
        onClick={() => handleSelectOption(option.isCorrect, index)}
      >
        {option.text}
      </ButtonLearning>
    )
  })

  return (
    <div className={styles.flashcard__content}>
      <h1 className={styles.flashcard__title}>{question.sourceWord}</h1>
      <div className="mt-24 sm:mt-[126px] grid grid-cols-2 gap-x-[10px] sm:gap-x-5 gap-y-[10px]">{renderOptions}</div>
    </div>
  )
}
