import React from 'react'
import PropTypes from 'prop-types'

const GroupFound = ({ questions, handleQuestionAnswer, isError }) => {
  return (
    <>
      <div className="w-[95%] mx-auto mt-[60px]">
        <h1 className="text-[32px] sm:text-[48px] font-[600] mb-[20px] sm:mb-[40px]">Как вы нас нашли?</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] md:gap-[10px] 2xl:gap-[40px] mb-[20px] sm:mb-[100px]">
          {questions.map((item) => (
            <div
              className="w-auto 2xl:w-[500px] h-[80px] xs:h-[100px] md:h-[150px] bg-[#4C4C4C99] flex items-center justify-center rounded-[20px] border border-[#8A8A8A80] cursor-pointer transition duration-300 linear"
              key={item.id}
              onClick={() => handleQuestionAnswer(item.id)}
              style={{ background: item.answer ? 'green' : 'gray' }}
            >
              {item.question}
            </div>
          ))}
        </div>
      </div>
      {isError && (
        <div className="Error__text">
          <p
            className="
          text-[#FF0000] text-[12px] sm:text-[16px] font-[400] mt-[20px]
         "
          >
            Выберите один из вариантов
          </p>
        </div>
      )}
    </>
  )
}

GroupFound.propTypes = {
  questions: PropTypes.array.isRequired,
  handleQuestionAnswer: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
}

export default GroupFound
