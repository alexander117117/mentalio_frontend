import { useEffect } from 'react'
import { getCartsFolderMentalio } from '@/features/pagination/model/store/catalogThunks.ts'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/app/store/configureStore.ts'

export function useGetCarts() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getCartsFolderMentalio())
  }, [dispatch])
}
