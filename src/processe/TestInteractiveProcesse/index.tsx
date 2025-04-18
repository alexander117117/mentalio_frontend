import { AppDispatch, RootState } from '@/app/store/configureStore'
import { ButtonBack } from '@/shared/ui/buttons/ButtonBack'
import { useDispatch, useSelector } from 'react-redux'
import { SummaryPage } from '../../features/testInteractive/ui/interactive/CardModePage/ui/SummaryPage'
import { ModesInteractive } from '@/entities/testInteractive/types'
import { Id } from '@/shared/types'
import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { getDataTestInteractive } from './hooks/getDataTestInteractive'
import { CardModePage } from '@/features/testInteractive/ui/interactive/CardModePage'
import { MemorizationPage, TestPage } from '../Main'
import { resetStateInteractive } from '@/entities/testInteractive/store/slice'
import { computeTestResults, resetTestAnalytics } from '@/entities/testAnalytics/testAnalyticsSlice'
import { ResponseTest } from '@/features/testInteractive/ui/result/ResponseTest'
import { saveResultTestThunks } from '@/entities/testAnalytics/thunks'

type UseParamsTestInteractive = { modes: ModesInteractive; idTopic: Id }

export function TestInteractiveProcesse() {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const { idTopic = '', modes = '' } = useParams<UseParamsTestInteractive>()
  const { words, loading, isShowSummary } = useSelector((state: RootState) => state.testInteractive)
  const { answers, isResultPosted } = useSelector((state: RootState) => state.testAnalyticsSlice)

  useLayoutEffect(() => {
    dispatch(resetTestAnalytics())
    dispatch(resetStateInteractive())
  }, [dispatch])

  useLayoutEffect(() => {
    getDataTestInteractive({ dispatch, location, idTopic, modes })
  }, [idTopic, location.state, dispatch])

  useEffect(() => {
    if (modes === 'test' && isShowSummary && answers.length === words.length && !isResultPosted) {
      dispatch(computeTestResults())
      dispatch(saveResultTestThunks({ idTopic, answers }))
    }
  }, [modes, isShowSummary, answers.length, words.length, isResultPosted, idTopic, dispatch])

  /* ---------- UI ---------- */
  if (loading) return <div>Loading…</div>
  if (words.length === 0)
    return (
      <div className="container mx-auto pt-[90px] pb-10">
        <ButtonBack />
        <h1 className="text-center text-xl">Нет карточек для отображения</h1>
      </div>
    )

  if (isShowSummary) {
    switch (modes) {
      case 'card-mode':
      case 'memorization':
        return <SummaryPage />
      case 'test':
        return <ResponseTest />
    }
  }

  /* страницы интерактивов */
  return (
    <>
      <ButtonBack />
      <div className="container mx-auto flex justify-center pt-[90px] pb-10">
        {modes === 'card-mode' && <CardModePage />}
        {modes === 'memorization' && <MemorizationPage />}
        {modes === 'test' && <TestPage />}
      </div>
    </>
  )
}
