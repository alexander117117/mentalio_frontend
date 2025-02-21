import { TextError } from '@/shared/ui/TextError'
import { UseFormRegisterReturn } from 'react-hook-form'

interface DescriptionFolderProps {
  name: string
  placeholder: string
  error?: string
  register?: UseFormRegisterReturn
}
export function DescriptionFolder({ name, placeholder, error, register }: DescriptionFolderProps) {
  return (
    <>
      <textarea
        className="w-full bg-[#171717] outline-none rounded-[10px] px-3 py-[12px] sm:pt-[24px] sm:pb-[36px] text-[10px] sm:text-base resize-none"
        name={name}
        placeholder={placeholder}
        rows={3}
        {...register}
      ></textarea>
      <TextError errorMessage={error} />
    </>
  )
}
