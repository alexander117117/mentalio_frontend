import * as React from 'react'
import style from "./index.module.css"
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { close_icon } from '@/shared/assets/images'
import { TopicInfo } from './components/TopicInfo'

interface InfoFolderProps {
  title: string
  date: string
}
export function InfoFolder({ title, date }: InfoFolderProps){
  return (
    <div className={style.info_folder + " relative"}>
      <div className="flex flex-col items-start">
        <TopicInfo title={title} date={date}/>

        <img src={close_icon} alt="delete topic"/>
      </div>

      <ButtonControlFolder>Перейти</ButtonControlFolder>
    </div>
  )
}