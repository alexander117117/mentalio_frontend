import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { flexColumnStartClass } from '@/shared/lib/classNames'
import { folderClass } from '@/shared/lib/classNames'
import { TopicsItem } from '@/entities/folder/lib/types'
import { useState } from 'react'
import { ListWordPublic } from '@/features/ListWordPublic'
import { TopicInfo } from '@/shared/ui/TopicInfo'

interface InfoFolderProps {
  dataTopic: TopicsItem
}
export function InfoFolder({ dataTopic }: InfoFolderProps) {
  const [isShowWord, setIsShowWord] = useState<boolean>(false)

  const handleClickShowWord = () => {
    setIsShowWord(!isShowWord)
  }
  return (
    <>
      <div className={folderClass}>
        <div className={flexColumnStartClass}>
          <TopicInfo dataTopic={dataTopic} />
        </div>

        <ButtonControlFolder isSmall={true} onClick={handleClickShowWord}>
          {isShowWord ? 'Закрыть' : 'Посмотреть'}
        </ButtonControlFolder>
      </div>
      {isShowWord && <ListWordPublic cards={dataTopic.cards} />}
    </>
  )
}
