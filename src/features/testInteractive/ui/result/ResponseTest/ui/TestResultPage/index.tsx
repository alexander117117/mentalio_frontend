import { useSelector } from 'react-redux'
import styles from './index.module.css'
import { TestAnalytic } from '@/widgets/test/TestAnalytic'
import { selectTestAnalytics } from '@/entities/testAnalytics/testAnalyticsSlice'
import { Link } from 'react-router'
import { ButtonBack } from '@/shared/ui/buttons/ButtonBack'

interface TestResultPageProps {
  handleTryAgain: () => void
}
export function TestResultPage({ handleTryAgain }: TestResultPageProps) {
  const { answers, correctCount, totalQuestions } = useSelector(selectTestAnalytics)
  const { percent } = useSelector(selectTestAnalytics)

  return (
    <div className={`flex items-start pr-0 sm:pr-[30px] pb-24 md:pb-0 pt-12 sm:pt-5 relative`}>
      <div className="w-full sm:w-auto sm:flex-1 px-7 sm:ml-12 xl:ml-[60px] mt-5 sm:mt-[60px] pb-5">
        <div className={styles.testResultPage}>
          <ButtonBack />

          <h1 className={styles.testResultPage__title}>
            Тест{' '}
            <span className={styles.testResultPage__titleSpan}>
              {correctCount}/{totalQuestions}
            </span>
          </h1>

          <div className={styles.testResultPage__content}>
            {answers.map((ans) => (
              <TestAnalytic
                key={ans.questionId}
                wrong={!ans.isCorrect}
                questionText={ans.questionText}
                correctAnswer={ans.correctAnswer}
                userAnswer={ans.userAnswer}
              />
            ))}
          </div>
          <div className="w-full mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-5">
            <button
              onClick={handleTryAgain}
              className={`py-4 sm:py-5 w-full sm:w-[300px] rounded-[15px] text-white text-sm sm:text-xl text-center
            ${percent > 59 ? 'bg-primary' : percent >= 25 ? 'bg-bgYellow' : 'bg-bgRed'}`}
            >
              Попробовать снова
            </button>
            <Link
              to={'/'}
              className={`py-4 sm:py-5 bg-[#DEF3DD] w-full sm:w-[300px] rounded-[15px] text-sm sm:text-xl text-center
              ${percent > 59 ? 'bg-positiveResult' : percent >= 25 ? 'bg-neutralResult' : 'bg-negativeResult'}`
              }
            >
              Вернуться в меню
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
