import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react'
import { TopicInfo } from './components/TopicInfo'
import { flexColumnStartClass } from '@/shared/lib/classNames'
import { folderClass } from './lib'
interface InfoFolderProps {
  title: string
  date: string
}
export function InfoFolder({ title, date }: InfoFolderProps) {
  return (
    <div className={folderClass}>
      <div className={flexColumnStartClass}>
        <TopicInfo title={title} date={date} />

        <CloseIcon title="delete topic" />
      </div>

      <ButtonControlFolder>Перейти</ButtonControlFolder>
    </div>
  )
}
