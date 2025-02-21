import { executeApiRequest } from '@/shared/api'

export async function getListCategories() {
  const response = await executeApiRequest({
    url: '/category',
    method: 'GET',
    errorMessage: 'Не удалось получить список категорий',
  })
  return response.data
}
