import { useState } from 'react'
import { TestPercentPage } from './ui/TestPercentPage'
import { TestResultPage } from './ui/TestResultPage'
import { AppDispatch } from '@/app/store/configureStore'
import { repeatAnalyticsInteractive, resetTestAnalytics } from '@/entities/testAnalytics/testAnalyticsSlice'
import {
  repeatTestInteractive,
  resetStateInteractive,
  setLoadingInteractive,
} from '@/entities/testInteractive/store/slice'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { ModesInteractive } from '@/entities/testInteractive/types'
import { Id } from '@/shared/types'
import { getDataTestInteractive } from '@/processe/TestInteractiveProcesse/hooks/getDataTestInteractive'

type UseParams = { modes: ModesInteractive; idTopic: Id }

export function ResponseTest() {
  const [responseRenderingLevel, setResponseRenderingLevel] = useState(0)
  const dispatch = useDispatch<AppDispatch>()
  const location = useLocation()
  const { idTopic = '', modes = '' } = useParams<UseParams>() // ← достаём тему и режим

  /** ----------- нажали «Попробовать снова» ---------- */
  const handleTryAgain = async () => {
    /* 1. очистка локального стора */
    dispatch(repeatTestInteractive()) // currentIndex = 0, isShowSummary = false …
    dispatch(repeatAnalyticsInteractive()) // очищаем answers, percent, isResultPosted
    dispatch(resetStateInteractive()) // words = [], loading = false …
    dispatch(resetTestAnalytics())

    /* 2. ставим крутилку и повторно запрашиваем данные */
    dispatch(setLoadingInteractive(true))
    await getDataTestInteractive({ dispatch, location, idTopic, modes }) // ← новый запрос

    /* 3. возвращаемся на страницу вопросов */
    setResponseRenderingLevel(0)
  }

  function renderingLevel() {
    switch (responseRenderingLevel) {
      case 0:
        return <TestPercentPage handleTryAgain={handleTryAgain} setResponseRenderingLevel={setResponseRenderingLevel} />
      case 1:
        return <TestResultPage handleTryAgain={handleTryAgain} />
    }
  }

  return <>{renderingLevel()}</>
}
