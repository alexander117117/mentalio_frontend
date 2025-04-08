import { humanFileSize } from '../../lib/helpers/index.ts'
import { ReactComponent as FileIcon } from '@/shared/assets/images/assets/file_icon.svg?react'
interface UploadProgressProps {
  progress: number
  uploaded: number
  total: number
  error: string | null
  fileName: string
  fileType: string
}

export const UploadProgress = ({ progress, uploaded, total, error, fileName, fileType }: UploadProgressProps) => {
  if (!fileName) return null

  const isComplete = progress === 100 && !error

  return (
    <div className="flex items-center gap-1 sm:gap-2 w-full relative">
      <div className="hidden w-[22px] h-[13px] sm:flex items-center justify-center rounded-[5px] bg-primary absolute left-[-5px] top-[15px]">
        <span className="text-[6px] sm:text-[8px] text-white">{fileType}</span>
      </div>
      <FileIcon className="hidden sm:inline" />

      <div className="flex flex-col w-fit overflow-hidden text-ellipsis whitespace-nowrap" id="main">
        <div className="text-xs text-gray-300 mb-1">{fileName}</div>
        <div className=" flex items-center gap-2">
          <div className="w-[70px] bg-gray-600 h-2 rounded relative">
            <div
              className="bg-green-500 h-2 rounded transition-all duration-200 border-[2px] border-borderDark"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-[8px] flex items-center">
            {!isComplete && `${humanFileSize(uploaded)} / ${humanFileSize(total)}`}
          </span>
        </div>
      </div>

      {isComplete && <span className="text-green-400 text-xs ml-2 hidden">Загружено!</span>}
      {error && <span className="text-red-400 text-xs ml-2 hidden">{error}</span>}
    </div>
  )
}
