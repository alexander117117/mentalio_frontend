import classNames from 'classnames'
import style from '../../index.module.css'
import { TopicsItem } from '@/entities/folder/lib/types'

interface TopicInfoProps {
  dataTopic: TopicsItem
}
export function TopicInfo({ dataTopic }: TopicInfoProps) {
  const containerClass = classNames('flex', 'items-center', 'gap-3', style.info_folder__word)
  const resultClass = classNames(style.info_folder_result)
  return (
    <>
      <div className={containerClass}>
        <p>{dataTopic.name}</p>
        <span>От {dataTopic.dateCreated}</span>
      </div>
      <p className={resultClass}>Завершено на 0% / 100%</p>
    </>
  )
}
