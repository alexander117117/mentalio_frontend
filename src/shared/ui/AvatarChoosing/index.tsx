import { test } from '@/shared/assets/images'

export function AvatarChoosing() {
  return (
    <div className="hidden xs:flex items-center gap-5">
      {[...Array(3)].map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[220px] lg:w-[300px] h-[25rem] sm:h-[350px] lg:h-[400px] rounded-[20px] truncate cursor-pointer"
        >
          <img src={test} alt={'avatar ' + index} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  )
}
