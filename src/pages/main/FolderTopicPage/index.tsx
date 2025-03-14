import { Translation } from '@/features/Translation'
import { TranslationSearch } from '@/features/TranslationSearch'
import { useLocation, useParams } from 'react-router-dom'
import { NavigationTabs } from '@/features/NavigationTabs'
import { WordList } from '@/widgets/WordList'
import { TopicRouteState } from '@/shared/types/route'

export function FolderTopicPage() {
  const location = useLocation()
  const { idFolder, idTopic } = useParams()
  const { dataTopic } = (location.state as TopicRouteState) || {}
  console.log('dataTopic', dataTopic)

  return (
    <div className="w-full">
      <h1 className="text-center font-unbounded text-xl sm:text-5xl font-bold mb-5">
        Термины B2 {idTopic}
        {idFolder}
      </h1>

      <TranslationSearch />

      <Translation />

      <NavigationTabs />

      <WordList />
    </div>
  )
}
