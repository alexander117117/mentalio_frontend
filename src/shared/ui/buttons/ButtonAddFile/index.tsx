import { GoPaperclip } from "react-icons/go";

export function ButtonAddFile() {
  return (
    <label className="h-[36px] aspect-square bg-[#171717] border border-[#272727] rounded-[10px] text-lg inline-flex items-center justify-center cursor-pointer">
      <input type="file" className="hidden" />
      <GoPaperclip />
    </label>
  )
}
