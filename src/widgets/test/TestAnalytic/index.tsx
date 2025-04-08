interface TestAnalyticProps {
  wrong?: boolean
  questionText: string
  correctAnswer: string
  userAnswer: string
}

export function TestAnalytic({ wrong = false, questionText, correctAnswer, userAnswer }: TestAnalyticProps) {
  console.log('TestAnalytic', {
    wrong,
    questionText,
    correctAnswer,
    userAnswer,
  })

  return (
    <div className={`w-full py-[10px] px-[10px] sm:px-5 ${wrong ? 'bg-wrongAnswer' : 'bg-rightAnswer'} rounded-[10px]`}>
      <span className="text-[22px]">{questionText}</span>

      <div className="mt-[60px] text-white relative text-[10px] sm:text-sm">
        <div
          className={`w-full bg-primary rounded-[10px] py-[10px] ${
            wrong ? 'pl-[33%] sm:pl-[22%]' : 'pl-[10px]'
          } pr-[10px]`}
        >
          {correctAnswer}
        </div>

        {wrong && (
          <div
            className="absolute top-0 left-0 w-[30%] sm:w-[20%] h-full bg-[#FF0000CC]
                          rounded-[10px] py-[10px] px-[10px] overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {userAnswer}
          </div>
        )}
      </div>
    </div>
  )
}
