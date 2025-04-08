import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'

import { RootState } from '@/app/store/configureStore'
import { InputQuantity } from '@/shared/ui/inputs/InputQuantity'

interface IFormValues {
  quantityQuestionsMaxLength: number | null
  checkFavorites: boolean
}

export function FormSettingMemorization() {
  const navigate = useNavigate()

  const { topicName, cards, id } = useSelector((state: RootState) => state.userTopic.dataTopic)

  const { register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      quantityQuestionsMaxLength: null,
      checkFavorites: false,
    },
  })

  const onSubmit = (data: IFormValues) => {
    const { quantityQuestionsMaxLength, checkFavorites } = data

    const setting = {
      num_questions: quantityQuestionsMaxLength || cards.length,
      isFavoritesOnly: checkFavorites,
    }

    const words = [...cards]

    navigate(`/test-interactive/${id}/memorization`, {
      state: { topicName, words, setting },
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formSettingLearning}>
      <InputQuantity
        title="Изучать избранное"
        titleContex={`[максимум ${cards.length}]`}
        placeholder="Введите кол-во вопросов"
        register={register('quantityQuestionsMaxLength', {
          valueAsNumber: true,
        })}
      />
      <InputChecked title="Изучать избранное" register={register('checkFavorites')} />

      <div className="flex justify-center">
        <ButtonControlFolder type="submit" color="text-primary" customPadding="px-5 md:px-11" isSmall>
          Начать
        </ButtonControlFolder>
      </div>
    </form>
  )
}
