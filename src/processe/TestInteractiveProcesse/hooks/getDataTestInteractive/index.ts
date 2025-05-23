import { AppDispatch } from '@/app/store/configureStore'
import { initTestAnalytics } from '@/entities/testAnalytics/testAnalyticsSlice'
import { setDataTestInteractive } from '@/entities/testInteractive/store/slice'
import { getDataMemorizationThunks, getDataTestThunks } from '@/entities/testInteractive/store/thunks'
import { ModesInteractive, SettingInteractive, WordsInteractive } from '@/entities/testInteractive/types'
import { Id } from '@/shared/types'
import { Location } from 'react-router'

interface InteractiveLocationState {
  modes: ModesInteractive
  words: WordsInteractive
  setting: SettingInteractive
  topicName: string
}
interface getDataTestInteractiveParams {
  dispatch: AppDispatch
  location: Location
  idTopic: Id
  modes: ModesInteractive
}
export async function getDataTestInteractive({ dispatch, location, idTopic, modes }: getDataTestInteractiveParams) {
  const { words, setting, topicName } = location.state as InteractiveLocationState
  let wordsCount = words.length
  switch (modes) {
    case 'card-mode':
      {
        dispatch(
          setDataTestInteractive({
            modes,
            words,
            setting,
            topicName,
          }),
        )
      }
      break
    case 'memorization':
      {
        try {
          const respons = await dispatch(getDataMemorizationThunks({ idTopic, setting })).unwrap()
          dispatch(
            setDataTestInteractive({
              modes,
              words: respons,
              setting,
              topicName,
            }),
          )
          wordsCount = respons.length
        } catch (err) {
          console.error('Error', err)
        }
      }
      break
    case 'test':
      {
        try {
          const respons = await dispatch(getDataTestThunks({ idTopic, setting })).unwrap()
          dispatch(
            setDataTestInteractive({
              modes,
              words: respons,
              setting,
              topicName,
            }),
          )
          dispatch(initTestAnalytics({ questionsCount: respons.length }))
          wordsCount = respons.length
        } catch (err) {
          console.error('Error', err)
        }
      }
      break
  }
  dispatch(initTestAnalytics({ questionsCount: wordsCount }))
}
