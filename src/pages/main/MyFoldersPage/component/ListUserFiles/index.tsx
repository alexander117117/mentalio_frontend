import * as React from 'react'
import { Folder } from '../../UI/Folder'

interface IListUserFiles {
  files: {
    id: number
    title: string
    dateCreated: string
    desc: string
  }[]
}

export function ListUserFiles({ files }: IListUserFiles) {
  return (
    <>
      {files.map((file) => (
        <Folder key={file.id} title={file.title} date={file.dateCreated} desc={file.desc} dataFolder={files} />
      ))}
    </>
  )
}
