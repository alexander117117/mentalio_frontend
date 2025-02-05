import * as React from 'react'
import { UserFolder } from '../../UI/UserFolder'

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
      {files.map((file, index) => (
        <UserFolder key={file.id} title={file.title} date={file.dateCreated} desc={file.desc} />
      ))}
    </>
  )
}
