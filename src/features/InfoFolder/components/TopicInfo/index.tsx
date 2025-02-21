import { TopicsItem } from '@/entities/folder/lib/types'
import { containerClass, resultClass } from '../../lib'

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
      <p className={resultClass}>Завершено на 0% / 100%</p>
    </>
  )
}
