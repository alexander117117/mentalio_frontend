import { useState } from 'react'
import { TestPercentPage } from './ui/TestPercentPage'
import { TestResultPage } from './ui/TestResultPage'
import { AppDispatch } from '@/app/store/configureStore'
import { repeatAnalyticsInteractive } from '@/entities/testAnalytics/testAnalyticsSlice'
import { repeatTestInteractive } from '@/entities/testInteractive/store/slice'
import { useDispatch } from 'react-redux'

export function ResponseTest() {
  const [responseRenderingLevel, setResponseRenderingLevel] = useState(0)

  const dispatch = useDispatch<AppDispatch>()

  const handleTryAgain = () => {
    dispatch(repeatTestInteractive())
    dispatch(repeatAnalyticsInteractive())
  }

  function renderingLevel() {
    switch (responseRenderingLevel) {
      case 0:
        return <TestPercentPage handleTryAgain={handleTryAgain} setResponseRenderingLevel={setResponseRenderingLevel}/>
      case 1:
        return <TestResultPage handleTryAgain={handleTryAgain} />
    }
  }

  return (
    <>
      {renderingLevel()}
    </>
  )
}
