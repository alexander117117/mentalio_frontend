import React, { useState } from 'react'
import { InfoPublicFolder } from '../../features/PublicFolder'
import { DirectoryContent } from './components/DirectoryContent'
import { ButtonDirectory } from '@/shared/ui/buttons/buttonDirectory'
import { FolderItemWithUserName } from '@/entities/folder/lib/types'

interface FolderDirectoryProps {
  dataFolder: FolderItemWithUserName
}
export const FolderDirectory = ({ dataFolder }: FolderDirectoryProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="w-[98%] sm:w-[95%] xl:w-[47%] 2xl:w-[675px] h-[85px] sm:h-[159px] 2xl:h-[159px] pt-[9px] sm:pt-[20px] pl-[9px] sm:pl-[20px] bg-directoryFolder rounded-[15px] relative">
        <DirectoryContent
          folderName={dataFolder.folderName}
          description={dataFolder.description}
          userName={dataFolder.userName}
        />

        <ButtonDirectory openModal={() => setIsModalOpen(true)}>Посмотреть</ButtonDirectory>
      </div>
      <InfoPublicFolder isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} dataFolder={dataFolder} />
    </>
  )
}
