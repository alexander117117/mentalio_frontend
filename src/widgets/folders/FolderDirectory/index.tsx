import React, { useState } from 'react'
import { InfoPublicFolder } from '../publicFolder'
import { DirectoryContent } from './components/DirectoryContent'
import { ButtonDirectory } from '@/shared/ui/buttons/buttonDirectory'

interface FolderDirectoryProps {
  title: string
  desc: string
  userName: string
}
export const FolderDirectory = ({ title, desc, userName }: FolderDirectoryProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="w-[98%] sm:w-[95%] xl:w-[47%] 2xl:w-[675px] h-[72px] sm:h-[159px] 2xl:h-[159px] pt-[9px] sm:pt-[20px] pl-[9px] sm:pl-[20px] bg-directoryFolder rounded-[15px] relative">
        <DirectoryContent title={title} desc={desc} userName={userName} />

        <ButtonDirectory openModal={() => setIsModalOpen(true)}>Посмотреть</ButtonDirectory>
      </div>
      <InfoPublicFolder isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}
