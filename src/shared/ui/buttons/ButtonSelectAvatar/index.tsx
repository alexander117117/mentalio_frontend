import { FaPlus } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/store/configureStore'
import { updateUserThunk } from '@/entities/user/model/store/auth/authThunks'

export function ButtonSelectAvatar() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.auth.user)
  const selectedAvatar = useSelector((state: RootState) => state.chosenAvatar.selectedAvatar)

  const handleClick = () => {
    if (!user) return
    dispatch(
      updateUserThunk({
        ...user,
        avatar: selectedAvatar,
      }),
    )
  }

  return (
    <button
      className="w-[90%] sm:w-[650px] bg-[#E7E7E7] h-[60px] sm:h-[80px] rounded-[20px] text-black flex items-center justify-between px-5 text-base sm:text-lg"
      onClick={handleClick}
    >
      <span>Выбрать</span>
      <div className="bg-[#DEF3DD] h-[30px] sm:w-[50px] aspect-square inline-flex items-center justify-center rounded-[10px]">
        <FaPlus />
      </div>
    </button>
  )
}
