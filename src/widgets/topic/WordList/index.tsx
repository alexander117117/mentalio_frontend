import { RootState } from '@/app/store/configureStore'
import { useSelector } from 'react-redux'
import { CardWord } from '../CardWord'

export function WordList() {
  const words = useSelector((state: RootState) => state.userTopic.dataTopic.cards)

  if (!words?.length) {
    return <p>Список пуст. Добавьте новые слова.</p>
  }

  return (
    <div className="mt-5 sm:mt-10 flex flex-col gap-5">
      {words.map((word) => (
        <CardWord key={word.id} cardDetails={word} />
      ))}
    </div>
  )
}
