import { useLocation, useParams } from 'react-router-dom'
import { NavigationTabs } from '@/features/topic/NavigationTabs'
import { WordList } from '@/widgets/topic/WordList'
import { Id } from '@/shared/types'
import { useEffect, useLayoutEffect, useState } from 'react'
import { CreateWordForm } from '@/features/topic/CreateWordForm'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { getTopicData, handleTitleSave } from './lib/helpers'
import { EditableTitle } from '@/shared/ui/EditableTitle'
import { clearCreatedWord } from '@/entities/topic/model/store'

export function FolderTopicPage() {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const { idFolder = '', idTopic = '' } = useParams<{ idFolder: Id; idTopic: Id }>()
  const { dataTopic } = useSelector((state: RootState) => state.userTopic)
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    dispatch(clearCreatedWord())
    return () => {
      dispatch(clearCreatedWord())
    }
  }, [])

  useEffect(() => {
    getTopicData({ dispatch, location, idFolder, idTopic, setLoading })
  }, [idFolder, idTopic, location.state, dispatch])

  if (!dataTopic) {
    return <div>Нет данных о теме</div>
  }

  return (
    <div className="w-full mx-auto">
      <h1 className="text-center font-unbounded text-xl sm:text-5xl font-bold mb-5">
        <EditableTitle
          initialValue={dataTopic.topicName}
          onSave={handleTitleSave({ idFolder, idTopic, dataTopic, dispatch })}
        />
      </h1>{' '}
      <CreateWordForm />
      <NavigationTabs />
      {loading ? <div>Loading...</div> : <WordList />}
    </div>
  )
}
