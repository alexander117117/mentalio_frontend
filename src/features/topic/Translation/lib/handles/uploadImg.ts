import { CreateWords } from '@/features/topic/CreateWordForm/lib/types'
import { axiosInstance } from '@/shared/api'
import { API_ENDPOINTS } from '@/shared/api/constEndpoints'
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
    formData.append('image', file)
    const response = await axiosInstance.post(API_ENDPOINTS.folders.cards.img.add, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (event) => {
        if (event.total) {
          setTotalSize(event.total)
          setUploadedSize(event.loaded)
          const percent = Math.round((event.loaded * 100) / event.total)
          setUploadProgress(percent)
        }
      },
    })
    if (response.data?.image_url) {
      setValue('translatedImg', response.data.image_url)
      setUploadError(null)
    } else {
      setUploadError('Не удалось загрузить файл. Попробуйте позже')
    }
  } catch (error) {
    console.error('Ошибка при загрузке файла', error)
    setUploadError('Не удалось загрузить файл. Попробуйте позже')
  }
}
