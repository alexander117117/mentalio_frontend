import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'
import axios from 'axios'
import { UseFormSetValue } from 'react-hook-form'

export interface UploadProgressProps {
  file: File
  setUploadedSize: React.Dispatch<React.SetStateAction<number>>
  setTotalSize: React.Dispatch<React.SetStateAction<number>>
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>
  setUploadError: React.Dispatch<React.SetStateAction<string | null>>
  setValue: UseFormSetValue<CreateWords>
}
export const handleUpload = async ({
  file,
  setUploadedSize,
  setTotalSize,
  setUploadProgress,
  setUploadError,
  setValue,
}: UploadProgressProps) => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    const response = await axios.post(API_ENDPOINTS.folders.cards.getIMG, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        if (event.total) {
          setTotalSize(event.total)
          setUploadedSize(event.loaded)
          const percent = Math.round((event.loaded * 100) / event.total)
          setUploadProgress(percent)
        }
      },
    })
    if (response.data?.url) {
      setValue('translatedImg', response.data.url)
      setUploadError(null)
    } else {
      setUploadError('Не удалось загрузить файл. Попробуйте позже')
    }

    // For testing (mock):
    setUploadedSize(23)
    setTotalSize(3222)
    const percent = Math.round((2 * 100) / 6)
    setUploadProgress(percent)
  } catch (error) {
    console.error('Ошибка при загрузке файла', error)
    setUploadError('Не удалось загрузить файл. Попробуйте позже')
  }
}
