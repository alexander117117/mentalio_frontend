import { Translation } from '@/features/Translation';
import { TranslationSearch } from '@/features/TranslationSearch';
import { useParams } from 'react-router-dom';
import { NavigationTabs } from '@/features/NavigationTabs';
import { WordList } from '@/widgets/WordList';

export function FolderTopicPage() {
  const { idFolder, idTopic } = useParams();
  return (
    <div>
      <h1 className="text-center font-unbounded text-5xl font-bold mb-5">Термины B2</h1>
      
      <TranslationSearch />
      <br />
      <Translation />

      <NavigationTabs />

      <WordList />
    </div>
  )
}
