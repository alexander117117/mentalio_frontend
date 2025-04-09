import { AppDispatch, RootState } from '@/app/store/configureStore'
import { ButtonBack } from '@/shared/ui/buttons/ButtonBack'
import { useDispatch, useSelector } from 'react-redux'
import { SummaryPage } from '../../features/testInteractive/ui/interactive/CardModePage/ui/SummaryPage'
import { ModesInteractive } from '@/entities/testInteractive/types'
import { Id } from '@/shared/types'
import { useLayoutEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { getDataTestInteractive } from './hooks/getDataTestInteractive'
import { CardModePage } from '@/features/testInteractive/ui/interactive/CardModePage'
import { MemorizationPage, TestPage } from '../Main'
import { resetStateInteractive } from '@/entities/testInteractive/store/slice'
import { computeTestResults, resetTestAnalytics } from '@/entities/testAnalytics/testAnalyticsSlice'
import { ResponseTest } from '@/features/testInteractive/ui/result/ResponseTest'

type UseParamsTestInteractive = { modes: ModesInteractive; idTopic: Id }

export function TestInteractiveProcesse() {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const { idTopic = '', modes = '' } = useParams<UseParamsTestInteractive>()
  const { words, loading, isShowSummary } = useSelector((state: RootState) => state.testInteractive)
  const { answers } = useSelector((state: RootState) => state.testAnalyticsSlice)

  useLayoutEffect(() => {
    dispatch(resetTestAnalytics())
    dispatch(resetStateInteractive())
  }, [])

  useLayoutEffect(() => {
    getDataTestInteractive({ dispatch, location, idTopic, modes })
  }, [idTopic, location.state, dispatch])

  if (words?.length === 0 && loading) {
    return <div>Loading...</div>
  } else if (words?.length === 0 && !loading) {
    return (
      <div className="container mx-auto pt-[90px] pb-10">
        <ButtonBack />
        <h1 className="text-center text-xl">Нет карточек для отображения</h1>
      </div>
    )
  } else if (words?.length > 0 && isShowSummary && answers.length >= words.length) {
    switch (modes) {
      case 'card-mode':
        return <SummaryPage />
      case 'memorization':
      case 'test':
        dispatch(computeTestResults())
        return <ResponseTest />
    }
  } else if (words?.length > 0) {
    return (
      <div className="container mx-auto flex justify-center pt-[90px] pb-10 relative">
        <ButtonBack />
        {(() => {
          switch (modes) {
            case 'card-mode':
              return <CardModePage />
            case 'memorization':
              return <MemorizationPage />
            case 'test':
              return <TestPage />
            default:
              return <div>Неизвестный режим</div>
          }
        })()}
      </div>
    )
  }
}
