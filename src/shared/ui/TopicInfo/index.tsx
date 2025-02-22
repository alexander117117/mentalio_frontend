import { TopicsItem } from '@/entities/folder/lib/types'
import { containerClass } from '@/shared/lib/classNames'
import { resultClass } from '@/shared/lib/classNames'

interface TopicInfoProps {
  dataTopic: TopicsItem
}
export function TopicInfo({ dataTopic }: TopicInfoProps) {
  return (
    <>
      <div className={containerClass}>
        <p>{dataTopic.name}</p>
        <span>От {dataTopic.dateCreated}</span>
      </div>
      <p className={resultClass}>Завершено на {dataTopic.percentStudy}% / 100%</p>
    </>
  )
}
