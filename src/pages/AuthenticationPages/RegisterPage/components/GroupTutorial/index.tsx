import React from 'react'

const GroupTutorial = () => {
  const dataVideo = ['', '', '']
  return (
    <>
      <div className="w-[95%] mx-auto mt-[20px] xs:mt-[50px] 2xl:mt-[80px]">
        <h1 className="text-[26px] sm:text-[48px] font-[600] mb-[20px] xs:mb-[40px]">
          {window.innerWidth < 576 ? 'Ознакомительные видео' : 'Ознакомительные видео по работе на нашей платформе'}
        </h1>

        <div className="flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap gap-[20px] 2xl:gap-[40px]">
          {dataVideo.map((item, index) => (
            <div key={index} className="w-full xs:w-[500px] h-[200px] xs:h-[530px] bg-[#4C4C4C99] rounded-[20px]"></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default GroupTutorial
