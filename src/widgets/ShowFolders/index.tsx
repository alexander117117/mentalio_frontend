import { NonEmptyFolder } from './component/NonEmptyFolder'
import { EmptyFolder } from './component/EmptyFolder'
import { FoldersProps } from '@/widgets/ShowFolders/lib/types.ts'

export function ShowFolders({ files }: FoldersProps) {
  return <>{files?.length ? <NonEmptyFolder files={files} /> : <EmptyFolder />}</>
}
