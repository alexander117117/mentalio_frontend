import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper as SwiperClass } from 'swiper'
import { setIndex } from '@/entities/cardMode/store/slice'
import { selectPreparedWords } from '@/entities/cardMode/store/selectors'
import { AppDispatch, RootState } from '@/app/store/configureStore'

export function useCardModeSlider() {
  const dispatch = useDispatch<AppDispatch>()
  const words = useSelector(selectPreparedWords)
  const { isInfinite, topicName } = useSelector((state: RootState) => state.cardMode)

  const [isReachEnd, setIsReachEnd] = useState(false)
  const [isShowSummary, setIsShowSummary] = useState(false)

  // Сброс состояний при изменении карточек
  useEffect(() => {
    setIsReachEnd(false)
    setIsShowSummary(false)
  }, [words])

  // Обработчик изменения слайда
  const handleSlideChange = useCallback(
    (swiper: SwiperClass) => {
      const realIndex = swiper.realIndex
      dispatch(setIndex(realIndex))
      const reachedEnd = !isInfinite && realIndex === words.length - 1
      setIsReachEnd(reachedEnd)
    },
    [dispatch, isInfinite, words.length],
  )

  return {
    isReachEnd,
    isShowSummary,
    setIsShowSummary,
    handleSlideChange,
    words,
    topicName,
    isInfinite,
  }
}
