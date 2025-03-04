import { Id } from '@/shared/types/types'

export { handlePending, handleRejected } from './StoreHandlers'

/**
 * Удаляет карточку из массива по переданному идентификатору
 * @param items - массив объектов-карточек
 * @param id - идентификатор удаляемой карточки
 * @returns новый массив без удаленного элемента
 */
export function removeCard<T extends { id: Id }>(items: T[], id: Id): T[] {
  return items.filter((item) => item.id !== id)
}
