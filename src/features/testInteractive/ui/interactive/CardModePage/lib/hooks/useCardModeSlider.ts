import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper as SwiperClass } from 'swiper'
import { setIndex } from '@/entities/testInteractive/store/slice'
import { selectPreparedWords } from '@/entities/testInteractive/store/selectors'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { addLengthAnswer } from '@/entities/testAnalytics/testAnalyticsSlice'

export function useCardModeSlider() {
  const dispatch = useDispatch<AppDispatch>()
  const words = useSelector(selectPreparedWords)
  const { setting, topicName } = useSelector((state: RootState) => state.testInteractive)

  const [isReachEnd, setIsReachEnd] = useState(false)

  // Сброс состояний при изменении карточек
  useEffect(() => {
    setIsReachEnd(false)
  }, [words])

  // Обработчик изменения слайда
  const handleSlideChange = useCallback(
    (swiper: SwiperClass) => {
      const realIndex = swiper.realIndex
      dispatch(setIndex(realIndex))
      const reachedEnd = !setting?.isInfinite && realIndex === words.length - 1
      setIsReachEnd(reachedEnd)
      dispatch(addLengthAnswer(realIndex + 1))
    },
    [dispatch, setting?.isInfinite, words.length],
  )

  return {
    isReachEnd,
    handleSlideChange,
    words,
    topicName,
    isInfinite: setting?.isInfinite,
  }
}
