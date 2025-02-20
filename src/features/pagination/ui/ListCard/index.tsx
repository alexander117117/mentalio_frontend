import React from 'react'
import { FolderDirectory } from '@/widgets/folders/FolderDirectory'
import { CardFolderItemWithUserName } from '@/entities/folder/lib/types'

interface ListCardProps {
  cards: CardFolderItemWithUserName[]
}

/**
 * Выводит список элементов с каталогами папок.
 *
 * @param {ListCardProps} props - The props for the ListCard component.
 * @param {CardFolderItemWithUserName[]} props.cards - An array of card folder items with user names.
 * @returns {JSX.Element} - The rendered list of card items.
 */
export function ListCard({ cards }: ListCardProps) {
  return (
    <div className="w-[98%] flex items-center justify-between flex-wrap gap-3 sm:gap-7 lg:gap-y-[30px] 2xl:gap-y-10 mt-5 sm:mt-[30px] pr-3 sm:pr-0">
      {cards.map((item) => (
        <FolderDirectory key={item.id} dataFolder={item} />
      ))}
    </div>
  )
}
