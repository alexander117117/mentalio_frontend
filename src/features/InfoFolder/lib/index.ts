import classNames from 'classnames'
import style from '../index.module.css'

export const folderClass = classNames(style.info_folder, 'relative', 'xxs:flex-row flex-col gap-3 md:gap-7')
export const containerClass = classNames('flex', 'items-center', 'gap-3', style.info_folder__word)
export const resultClass = classNames(style.info_folder_result)
