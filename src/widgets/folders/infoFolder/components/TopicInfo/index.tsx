import * as React from 'react'
import style from "../../index.module.css"
interface TopicInfoProps {
  title: string
  date: string
}
export function TopicInfo({ title, date }: TopicInfoProps) {
  return (
    <>
      <div className={"flex items-center gap-3 " + style.info_folder__word}>
        <p>{title}</p>
        <span>От {date}</span>
      </div>
      <p className={style.info_folder_result}>Завершено на 30% / 100%</p>
    </>
  )
}