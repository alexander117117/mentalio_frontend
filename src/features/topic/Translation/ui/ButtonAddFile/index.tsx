import { GoPaperclip } from 'react-icons/go'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ButtonAddFileProps {
  registerFile: UseFormRegisterReturn
}

export function ButtonAddFile({ registerFile }: ButtonAddFileProps) {
  return (
    <label className="h-[36px] aspect-square bg-[#171717] border border-[#272727] rounded-[10px] text-lg inline-flex items-center justify-center cursor-pointer">
      <input type="file" accept="image/*" className="hidden" {...registerFile} />
      <GoPaperclip />
    </label>
  )
}
