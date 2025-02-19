import classNames from 'classnames'
import style from '../../index.module.css'
interface TopicInfoProps {
  title: string
  date: string
}
export function TopicInfo({ title, date }: TopicInfoProps) {
  const containerClass = classNames('flex', 'items-center', 'gap-3', style.info_folder__word)
  const resultClass = classNames(style.info_folder_result)
  return (
    <>
      <div className={containerClass}>
        <p>{title}</p>
        <span>От {date}</span>
      </div>
      <p className={resultClass}>Завершено на 30% / 100%</p>
    </>
  )
}
