import { QuestionsTest, QuestionsMultipleChoice } from '.'

export interface handleSelectAnswerProps {
  isCorrect: boolean
  question: QuestionsTest | QuestionsMultipleChoice
  userChoice: string
  correctAnswer: string
}

export interface handleSelectAnswerMemorizationProps {
  isCorrect: boolean
  question: QuestionsTest | QuestionsMultipleChoice
}
