import React, { useState } from 'react'

interface FolderDirectoryProps {
  title: string
  desc: string
  userName: string
}
export const FolderDirectory = ({ title, desc, userName }: FolderDirectoryProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const handleClick = (): void => {
    setIsDisabled(true)
  }

  return (
    <div className="w-[98%] sm:w-[95%] xl:w-[47%] 2xl:w-[675px] h-[72px] sm:h-[159px] 2xl:h-[159px] pt-[9px] sm:pt-[20px] pl-[9px] sm:pl-[20px] bg-directoryFolder rounded-[15px] relative">
      <h2 className="text-[5px] sm:text-xl font-medium text-[#848484]">{userName}</h2>
      <h3 className="text-xs sm:text-[32px] font-bold text-[#fff] font-unbounded leading-[14px] sm:leading-[40px]">
        {title}
      </h3>
      <p className="w-[238px] sm:w-[367px] 2xl:w-[500px] text-[8px] sm:text-base font-medium text-[#848484] leading-[9.68px] sm:leading-[19px] mt-[5px]">
        {desc}
      </p>

      <button
        className={`py-[6px] sm:py-[15px] px-[13px] sm:px-[24px] 2xl:px-[36px] bg-[#36E326] text-[9px] sm:text-base font-medium rounded-[20px] absolute right-[-20px] sm:right-[-30px] md:right-[-35px] top-8 sm:top-20 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isDisabled}
        onClick={handleClick}
      >
        Посмотреть
      </button>
    </div>
  )
}
