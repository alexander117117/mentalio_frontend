import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGetCarts() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/catalog', {
          params: {
            query: '',
            page: 1,
            category: '',
            userName: 'Mentalio',
            limit: 6,
          },
        })
        setData(res.data.items)
      } catch (error) {
        console.error('Error fetching carts:', error)
      }
    }

    fetchData()
  }, [])

  return data
}
