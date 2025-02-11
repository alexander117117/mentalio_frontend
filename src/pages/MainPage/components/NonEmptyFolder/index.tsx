import React from 'react'
import { happy_folders, sad_folders } from '@/shared/images'
import { Link } from 'react-router'
import { Folder } from './UI/Folder'
import { ButtonAddFolderPlus } from '@/shared/ui/buttons/ButtonAddFolderPlus'

interface IFiles {
  id: number
  title: string
  dateCreated: string
  desc?: string
}

interface NonEmptyFolderProps {
  files: IFiles[]
}

export const NonEmptyFolder = ({ files }: NonEmptyFolderProps) => {
  return (
    <>
      <section className="w-full sm:w-[99%] flex items-center justify-center lg:justify-between">
        <div className="hidden lg:block">
          <h3 className="text-[32px] font-bold mb-[15px]">Добавить папку</h3>

          <div className="w-[210px] h-[102px] rounded-[15px] bg-[#D1FFBAE5] flex items-center justify-center relative">
            <img src={happy_folders} alt="" className="w-[130px] h-[80px] object-contain" />
            <ButtonAddFolderPlus />
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-between mb-[15px] xs:w-auto w-[80vw]">
            <h3 className="text-base sm:text-[32px] font-bold">Мои папки</h3>
            <Link
              to="/my-folders"
              className="inline-block py-0 sm:py-[12px] px-0 sm:px-[18px] sm:bg-[#001E02] rounded-[10px] text-[10px] sm:text-base text-[#6B6868] sm:text-[#fff]"
            >
              Смотреть все
            </Link>
          </div>

          <div
            className="w-full sm:w-[730px] flex items-center gap-[20px]"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {files.map((file, index) => (
              <Folder key={file.id} title={file.title} date={file.dateCreated} />
            ))}
          </div>

          {/* появляется на телефоне */}
          <div className="block lg:hidden w-fit relative mt-[15px] mx-auto">
            <div className="w-[127px] sm:w-[200px] h-[77px] xs:h-[110px] truncate">
              <img src={sad_folders} alt="" className="w-full h-full object-contain" />
            </div>
            <ButtonAddFolderPlus />
          </div>
        </div>
      </section>
    </>
  )
}
