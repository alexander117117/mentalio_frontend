import axios from '@axios'

interface AxiosErrorData {
  response?: {
    data?: any
  }
}

interface propsApiStoreTrunks {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  rejectWithValue: any
  errorMessage?: string
  body?: any
}

export async function apiStoreTrunks({
  method,
  url,
  errorMessage = 'Что-то пошло не так(',
  rejectWithValue,
  body = {},
}: propsApiStoreTrunks) {
  try {
    let response
    switch (method) {
      case 'GET':
        response = await axios.get(url)
        break
      case 'DELETE':
        response = await axios.delete(url)
        break
      case 'POST':
        response = await axios.post(url, body)
        break
      case 'PUT':
        response = await axios.put(url, body)
        break
    }
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosErrorData)?.response?.data || errorMessage)
  }
}
