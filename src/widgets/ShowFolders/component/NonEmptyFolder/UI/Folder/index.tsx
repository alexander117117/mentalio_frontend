import { UserFolder } from '@/features/UserFolder'
import { useState } from 'react'
import { happy_folders } from 'src/shared/assets/images'

interface FolderProps {
  dataFolder: any
}
export const Folder = ({ dataFolder }: FolderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-auto sm:w-[310px] h-auto sm:h-[102px] rounded-[15px] bg-[#D1FFBAE5] p-[10px] flex flex-col xs:flex-row items-center gap-2 sm:gap-[15px] relative"
      >
        <img src={happy_folders} alt="" className="w-[85px] sm:w-[130px] h-[50px] sm:h-[80px] object-contain" />
        <div className="">
          <h4 className="text-xs sm:text-xl font-medium font-unbounded">{dataFolder.folderName}</h4>
          <div className="text-[6px] sm:text-[14px] font-medium text-[#939393]">От {dataFolder.dateCreated}</div>
        </div>
      </button>

      <UserFolder isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} dataFolder={dataFolder} />
    </>
  )
}
