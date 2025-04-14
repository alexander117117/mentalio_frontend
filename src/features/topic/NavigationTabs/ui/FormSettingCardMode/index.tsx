import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'

import { RootState } from '@/app/store/configureStore'

interface IFormValues {
  checkInfinite: boolean
  checkShuffle: boolean
  checkFavorites: boolean
}

export function FormSettingCardMode() {
  const navigate = useNavigate()

  const { topicName, cards, id } = useSelector((state: RootState) => state.userTopic.dataTopic)

  const { register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      checkInfinite: false,
      checkShuffle: false,
      checkFavorites: false,
    },
  })

  const onSubmit = (data: IFormValues) => {
    const { checkInfinite, checkShuffle, checkFavorites } = data

    const setting = {
      isInfinite: checkInfinite,
      isShuffle: checkShuffle,
      isFavoritesOnly: checkFavorites,
    }
    const words = [...cards]

    navigate(`/test-interactive/${id}/card-mode`, {
      state: { topicName, words, setting },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formSettingLearning}>
      <InputChecked title="Бесконечный режим" register={register('checkInfinite')} />
      <InputChecked title="Перемешать карточки" register={register('checkShuffle')} />
      <InputChecked title="Изучать избранное" register={register('checkFavorites')} />
      <div className="flex justify-center mt-8 sm:mt-[100px]">
        <ButtonControlFolder type="submit" color="text-primary" customPadding="px-5 md:px-11">
          Начать
        </ButtonControlFolder>
      </div>
    </form>
  )
}
