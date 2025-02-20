import { NonEmptyFolder } from './component/NonEmptyFolder'
import { EmptyFolder } from './component/EmptyFolder'
import { useSelector } from 'react-redux'

export function ShowFolders() {
  const { files } = useSelector((state: any) => state.userFiles)

  return <>{files?.length ? <NonEmptyFolder files={files} /> : <EmptyFolder />}</>
}
