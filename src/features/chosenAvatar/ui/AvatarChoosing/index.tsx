import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { avatarItem } from '@/shared/constants/avatarItem'
import { setSelectedAvatar } from '@/features/chosenAvatar/chosenAvatarSlice'
import { AvatarItem } from '@/pages/auth/RegisterPage/hooks/useManageSelection'

export function AvatarChoosing() {
  const userAvatar = useSelector((state: RootState) => state.auth.user?.avatar)

  const [avatars, setAvatars] = useState<AvatarItem[]>(() => {
    return avatarItem.map((item) => ({
      ...item,
      chosen: item.avatar === userAvatar,
    }))
  })

  const dispatch = useDispatch<AppDispatch>()

  const handleAvatarSelect = (id: number) => {
    const updated = avatars.map((item) => ({
      ...item,
      chosen: item.id === id,
    }))
    setAvatars(updated)

    const chosen = updated.find((item) => item.chosen)
    if (chosen) {
      dispatch(setSelectedAvatar(chosen.avatar))
    }
  }

  return (
    <div className="hidden xs:flex items-center gap-5">
      {avatars.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[220px] lg:w-[300px] h-[25rem] sm:h-[350px] lg:h-[400px] rounded-[20px] truncate cursor-pointer"
          onClick={() => handleAvatarSelect(item.id)}
          style={{ border: item.chosen ? '2px solid green' : 'none' }}
        >
          <img
            src={'/images/' + item.avatar + '.png'}
            alt={'avatar ' + item.id}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
