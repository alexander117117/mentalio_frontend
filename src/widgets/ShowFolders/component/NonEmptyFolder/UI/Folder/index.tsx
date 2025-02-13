import React from 'react'
import { Link } from 'react-router'
import { happy_folders } from '@/shared/images'

interface FolderProps {
  title: string
  date: string
}
export const Folder = ({ title, date }: FolderProps) => {
  return (
    <>
      <Link
        to={'/'}
        className="w-auto sm:w-[310px] h-auto sm:h-[102px] rounded-[15px] bg-[#D1FFBAE5] p-[10px] flex flex-col xs:flex-row items-center gap-2 sm:gap-[15px] relative"
      >
        <img src={happy_folders} alt="" className="w-[85px] sm:w-[130px] h-[50px] sm:h-[80px] object-contain" />
        <div className="">
          <h4 className="text-xs sm:text-xl font-medium font-unbounded">{title}</h4>
          <div className="text-[6px] sm:text-[14px] font-medium text-[#939393]">От {date}</div>
        </div>
      </Link>
    </>
  )
}
