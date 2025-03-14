import * as React from 'react'
import { Folder } from '../../UI/Folder'
import { FolderItem } from '@/entities/folder/lib/types'

interface IListUserFiles {
  files: FolderItem[]
}

export function ListUserFiles({ files }: IListUserFiles) {
  return (
    <>
      {files.map((file) => (
        <Folder key={file.id} dataFolder={file} />
      ))}
    </>
  )
}
