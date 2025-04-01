import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'

import { AppDispatch, RootState } from '@/app/store/configureStore'
import { setTopicName, setWords, updateCardSettings } from '@/entities/cardMode/store/slice'

export function FormSettingCardMode() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { topicName, cards } = useSelector((state: RootState) => state.userTopic.dataTopic)
  const { isInfinite, isShuffle, isFavoritesOnly } = useSelector((state: RootState) => state.cardMode)

  const toggleInfinite = useCallback(() => {
    dispatch(updateCardSettings({ isInfinite: !isInfinite }))
  }, [isInfinite, dispatch])

  const toggleShuffle = useCallback(() => {
    dispatch(updateCardSettings({ isShuffle: !isShuffle }))
  }, [isShuffle, dispatch])

  const toggleFavorites = useCallback(() => {
    dispatch(updateCardSettings({ isFavoritesOnly: !isFavoritesOnly }))
  }, [isFavoritesOnly, dispatch])

  const handleStartTest = useCallback(() => {
    dispatch(setTopicName(topicName))
    dispatch(setWords(cards))
    navigate('/card-mode')
  }, [dispatch, topicName, cards, navigate])

  return (
    <form className={formSettingLearning}>
      <InputChecked
        title="Бесконечный режим"
        nameInput="checkInfinite"
        checked={isInfinite}
        onChange={toggleInfinite}
      />
      <InputChecked title="Перемешать карточки" nameInput="checkShuffle" checked={isShuffle} onChange={toggleShuffle} />
      <InputChecked
        title="Изучать избранное"
        nameInput="checkFavorites"
        checked={isFavoritesOnly}
        onChange={toggleFavorites}
      />
      <div className="flex justify-center">
        <ButtonControlFolder
          type="button"
          color="text-primary"
          customPadding="px-5 md:px-11"
          isSmall
          onClick={handleStartTest}
        >
          Начать
        </ButtonControlFolder>
      </div>
    </form>
  )
}
