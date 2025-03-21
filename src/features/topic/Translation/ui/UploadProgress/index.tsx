import { humanFileSize } from '../../lib/helpers/index.ts'

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
    <div className="flex items-center gap-2 mt-2 w-full">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#272727] rounded-[5px]">
        <span className="text-xs text-white">{fileType}</span>
      </div>

      <div className="flex flex-col w-full">
        <div className="text-xs text-gray-300 mb-1">
          {fileName}
          {!isComplete && ` — ${humanFileSize(uploaded)} / ${humanFileSize(total)}`}
        </div>
        <div className="w-full bg-gray-600 h-2 rounded relative">
          <div className="bg-green-500 h-2 rounded transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {isComplete && <span className="text-green-400 text-xs ml-2">Загружено!</span>}
      {error && <span className="text-red-400 text-xs ml-2">{error}</span>}
    </div>
  )
}
