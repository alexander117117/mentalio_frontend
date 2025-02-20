import { useEffect } from 'react'
import { getCardsFolderMentalio } from '@/features/pagination/model/store/catalogThunks.ts'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/app/store/configureStore.ts'

export function useGetCards() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getCardsFolderMentalio())
  }, [dispatch])
}
