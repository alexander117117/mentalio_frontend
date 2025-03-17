import classNames from 'classnames'
import style from './index.module.css'

export const flexColumnStartClass = classNames('flex', 'flex-col', 'items-start')

export const groupClass = classNames(style.InfoFolder_group, 'flex', 'flex-col', 'gap-3 md:gap-7', 'w-full')

export const folderClass = classNames(style.info_folder, 'relative', 'xxs:flex-row flex-col gap-3 md:gap-7')

export const resultClass = classNames(style.info_folder_result)

export const containerClass = classNames('flex', 'items-center', 'gap-3', style.info_folder__word)

export const buttonBack = classNames(style.buttonBack)

export const formSettingLearning = classNames('flex', 'flex-col', 'gap-5', 'w-auto', 'md:w-[473px]')

