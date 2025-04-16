import happy_folder_rounded from './assets/happy_folder_rounded.png'
import { UserFolder } from '@/features/UserFolder'
import { FolderItem } from '@/entities/folder/lib/types'
import { useState } from 'react'

interface UserFolder {
  dataFolder: FolderItem
}

export const Folder = ({ dataFolder }: UserFolder) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <>
      <div className="w-auto h-[184px] sm:h-[207px] md:h-[160px] lg:h-[209px] xl:h-[220px] 2xl:h-[269px] bg-userFolder rounded-[28px] truncate relative">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-normal gap-[10px] md:gap-5 2xl:gap-[40px] px-5">
          <div className="flex-shrink-0 w-[102px] sm:w-[170px] 2xl:w-[300px] h-auto sm:h-[107px] 2xl:h-[188px] truncate">
            <img src={happy_folder_rounded} alt="folder" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-0 sm:gap-[10px] text-center md:text-left min-w-0 md:flex-1 w-full md:w-auto">
            <h3 className="text-sm sm:text-[20px] lg:text-[34px] font-medium font-unbounded leading-[15px] sm:leading-[25px] lg:leading-[42px] overflow-hidden text-ellipsis whitespace-nowrap">
              {dataFolder.folderName}
            </h3>
            <span className="text-[8px] sm:text-sm lg:text-lg font-medium">От {dataFolder.dateCreated}</span>
          </div>
        </div>

        <div className="sm:bg-directoryFolder absolute top-0 left-0 right-0 bottom-0 pt-5 2xl:pt-[117px] px-5 2xl:px-[36px] transition duration-200 linear opacity-0 hover:opacity-100">
          <h3 className="hidden sm:block text-[24px] lg:text-[34px] text-white font-medium font-unbounded leading-[42px] overflow-hidden text-ellipsis line-clamp-1">
            {dataFolder.folderName}
          </h3>
          <p className="hidden sm:block w-[80%] text-[11px] lg:text-lg font-medium text-[#848484] text-wrap mt-4 2xl:mt-0">
            {dataFolder.description}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:inline-block py-[12px] px-[36px] sm:bg-[#36E326] rounded-[15px] ml-[69%] 2xl:ml-[75%] mt-[-10px]"
          >
            Открыть
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex sm:hidden items-center justify-center absolute top-0 left-0 right-0 bottom-0 text-[#fff] bg-[#000000ed]"
          >
            Открыть
          </button>
        </div>
      </div>

      <UserFolder isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} dataFolder={dataFolder} />
    </>
  )
}
