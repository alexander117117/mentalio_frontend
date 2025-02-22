import { useParams } from 'react-router-dom';


export function FolderTopicPage() {
  const { idFolder, idTopic } = useParams();
  return (
    <div>
      <h1>FolderTopicPage</h1>
      <p>idFolder: {idFolder}</p>
      <p>idTopic: {idTopic}</p>
    </div>
  )
}
