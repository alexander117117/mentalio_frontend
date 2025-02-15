import * as React from 'react'
import style from "./index.module.css"
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { ReactComponent as CloseIcon } from '@/shared/assets/images/assets/close_icon.svg?react';
import { TopicInfo } from './components/TopicInfo'
import classNames from 'classnames'

interface InfoFolderProps {
  title: string
  date: string
}
export function InfoFolder({ title, date }: InfoFolderProps){
  const folderClass = classNames(style.info_folder, 'relative');
  const contentClass = classNames('flex', 'flex-col', 'items-start');
  return (
    <div className={folderClass}>
      <div className={contentClass}>
        <TopicInfo title={title} date={date}/>

        <CloseIcon alt="delete topic" />
      </div>

      <ButtonControlFolder>Перейти</ButtonControlFolder>
    </div>
  )
}