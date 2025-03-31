import classNames from 'classnames'
import style from './index.module.css'
import cn from 'classnames'
import { colors } from '@/shared/constants/color'

export const flexColumnStartClass = classNames('flex', 'flex-col', 'items-start')

export const groupClass = classNames(style.InfoFolder_group, 'flex', 'flex-col', 'gap-3 md:gap-7', 'w-full')

export const folderClass = classNames(style.info_folder, 'relative', 'xxs:flex-row flex-col gap-3 md:gap-7')

export const resultClass = classNames(style.info_folder_result)

export const containerClass = classNames('flex', 'items-center', 'gap-3', style.info_folder__word)

export const buttonBack = classNames(style.buttonBack)

export const formSettingLearning = classNames('flex', 'flex-col', 'gap-5', 'w-auto', 'md:w-[473px]')

export const settingLayout = classNames('flex', 'flex-col', 'items-center', 'justify-center', 'gap-10')

export const settingItemPage = classNames('w-[90%] md:w-[650px]', 'flex', 'flex-col', 'gap-5')

export const defaultIconSize = 'text-[30px] sm:text-[40px]'

interface DropdownClassNameParams {
  isPrimaryDropdown: boolean;
  isOpen: boolean;
}

export function getDropdownClassName(params: DropdownClassNameParams): string {
  const { isPrimaryDropdown, isOpen } = params;
  
  return cn(
    'h-fit py-[15px] pl-[10px] pr-5 rounded-[20px] cursor-pointer overflow-hidden',
    'transition-all duration-250 ease-linear',
    {
      [`bg-[${colors.dropDownMainColor}] text-black`]: isPrimaryDropdown,
      [`bg-[${colors.dropDownSecondaryColor}] text-white`]: !isPrimaryDropdown
    },
    { 'max-h-[1000px]': isOpen },
    !isOpen && isPrimaryDropdown && 'max-h-[60px] md:max-h-[80px]',
    !isOpen && !isPrimaryDropdown && 'max-h-[55px]'
  );
}