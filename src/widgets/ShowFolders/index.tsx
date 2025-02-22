import { NonEmptyFolder } from './component/NonEmptyFolder'
import { EmptyFolder } from './component/EmptyFolder'
import { useSelector } from 'react-redux'

export function ShowFolders() {
  const { filesUser } = useSelector((state: any) => state.userFiles)

  return <>{filesUser?.length ? <NonEmptyFolder files={filesUser} /> : <EmptyFolder />}</>
}
