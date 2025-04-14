import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'
import { RootState } from '@/app/store/configureStore'
import { InputQuantity } from '@/shared/ui/inputs/InputQuantity'

interface IFormValues {
  quantityQuestionsMaxLength: number | null
  checkAnswerTrueFalse: boolean
  checkAnswerMultipleChoice: boolean
  checkAnswerWritten: boolean
}

export function FormSettingTest() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const { topicName, cards, id } = useSelector((state: RootState) => state.userTopic.dataTopic)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      quantityQuestionsMaxLength: null,
      checkAnswerTrueFalse: false,
      checkAnswerMultipleChoice: false,
      checkAnswerWritten: false,
    },
  })

  const onSubmit = (data: IFormValues) => {
    const { quantityQuestionsMaxLength, checkAnswerTrueFalse, checkAnswerMultipleChoice, checkAnswerWritten } = data

    const num_questions = quantityQuestionsMaxLength || cards.length

    const setting = {
      num_questions,
      isAnswerTrueFalse: checkAnswerTrueFalse,
      isAnswerMultipleChoice: checkAnswerMultipleChoice,
      isAnswerWritten: checkAnswerWritten,
    }

    const words = [...cards]

    if (words.length < 4) {
      setError(true)
      return
    }
    setError(false)

    navigate(`/test-interactive/${id}/test`, {
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
          min: {
            value: 4,
            message: 'Минимум 4 карточки',
          },
          max: {
            value: cards.length,
            message: `Максимум ${cards.length} карточек`,
          },
        })}
      />
      {errors.quantityQuestionsMaxLength && <p className="text-red-500">{errors.quantityQuestionsMaxLength.message}</p>}

      <InputChecked title="Верно - неверно" register={register('checkAnswerTrueFalse')} />
      <InputChecked title="Вопросы с выбором ответа" register={register('checkAnswerMultipleChoice')} />
      <InputChecked title="Письменные вопросы" register={register('checkAnswerWritten')} />

      <div className="flex justify-center mt-8 sm:mt-[100px]">
        <ButtonControlFolder type="submit" color="text-primary" customPadding="px-5 md:px-11">
          Начать
        </ButtonControlFolder>
      </div>

      {error && <p className="text-red-500">Минимум 4 карточки</p>}
    </form>
  )
}
