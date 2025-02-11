import * as React from 'react'
import { useEffect } from 'react'
import { ListUserFiles } from './component/ListUserFiles'

import { ButtonAddFolderPlus } from '@/shared/ui/buttons/ButtonAddFolderPlus/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFiles } from '@/entities/folder/store/userFiles/userFilesThunks'

export const MyFoldersPage = () => {
  const dispatch = useDispatch()
  const { files } = useSelector((state: any) => state.userFiles)

  useEffect(() => {
    dispatch(getUserFiles())
  }, [])

  return (
    <>
      <main className="w-full sm:w-auto">
        <h1 className="text-[32px] sm:text-[46px] font-bold font-unbounded text-left sm:text-center leading-[39px] sm:leading-[57px]">
          Мои папки
        </h1>
        <p className="block sm:hidden text-[12px] font-medium text-[#6B6868] whitespace-pre-line leading-[14px] mt-[10px]">
          Здесь ты можешь посмотреть свои папки, а также добавить новую из каталога или создать лично
        </p>

        {/* Папки пользователя */}
        {files?.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-[10px] sm:gap-5 mt-[40px] mb-5 sm:mb-[35px]">
              <ListUserFiles files={files} />
            </div>
            <ButtonAddFolderPlus myFolderPage={true} />
          </>
        ) : (
          <div
            style={{
              marginTop: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p>Папок нет</p>
          </div>
        )}
      </main>
    </>
  )
}
