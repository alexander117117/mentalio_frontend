import { useState, useEffect } from 'react'
import { executeApiRequest } from '@/shared/api/apiHelpers.ts'

export function useGetCarts() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await executeApiRequest({
        method: 'GET',
        url: '/catalog',
        body: {
          query: '',
          page: 1,
          category: '',
          userName: 'Mentalio',
          limit: 6,
        },
      })
      setData(response.data.items)
    }

    fetchData().then((r) => r)
  }, [])

  return data
}
