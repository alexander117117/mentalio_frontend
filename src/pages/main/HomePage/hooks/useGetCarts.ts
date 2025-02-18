import { useState, useEffect } from 'react'
import { executeApiRequest } from '@/shared/api/apiHelpers.ts'
import { getCartsFolderMentalio } from '@/features/pagination/model/store/catalogThunks.ts'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/app/store/configureStore.ts'
import { getUserFiles } from '@/entities/folder/model/store/userFiles/userFilesThunks.ts'

export function useGetCarts() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getCartsFolderMentalio())
  }, [dispatch])
}
