import { useLocation, useParams } from 'react-router-dom'
import { NavigationTabs } from '@/features/topic/NavigationTabs'
import { WordList } from '@/widgets/topic/WordList'
import { Id } from '@/shared/types'
import { useEffect } from 'react'
import { CreateWordForm } from '@/features/topic/CreateWordForm'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { getTopicData } from './lib/helpers'

export function FolderTopicPage() {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const { idFolder, idTopic } = useParams<{ idFolder: Id; idTopic: Id }>()
  const { dataTopic } = useSelector((state: RootState) => state.userTopic)

  useEffect(() => {
    getTopicData({ dispatch, location, idFolder, idTopic })
  }, [idFolder, idTopic, location.state, dispatch])


  if (!dataTopic) {
    return <div>Нет данных о теме</div>
  }

  return (
    <div className="w-full">
      <h1 className="text-center font-unbounded text-xl sm:text-5xl font-bold mb-5">{dataTopic.topicName}</h1>
      <CreateWordForm />
      <NavigationTabs />
      <WordList />
    </div>
  )
}
