export interface Test {
  id: string
  title: string
  questions: Question[]
}

export interface Question {
  id: string
  text: string
  answers: Answer[]
}

export interface Answer {
  id: string
  text: string
  isCorrect?: boolean // бывает, если хотим хранить признак правильного ответа
}
