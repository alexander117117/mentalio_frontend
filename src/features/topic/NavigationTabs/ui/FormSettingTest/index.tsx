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
  checkAnswerTrueFalse: boolean
  checkAnswerMultipleChoice: boolean
  checkAnswerWritten: boolean
}

export function FormSettingTest() {
  const navigate = useNavigate()

  const { topicName, cards, id } = useSelector((state: RootState) => state.userTopic.dataTopic)
  const { register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      quantityQuestionsMaxLength: null,
      checkAnswerTrueFalse: false,
      checkAnswerMultipleChoice: false,
      checkAnswerWritten: false,
    },
  })
  const onSubmit = (data: IFormValues) => {
    const { quantityQuestionsMaxLength, checkAnswerTrueFalse, checkAnswerMultipleChoice, checkAnswerWritten } = data

    const setting = {
      num_questions: quantityQuestionsMaxLength || cards.length,
      isAnswerTrueFalse: checkAnswerTrueFalse,
      isAnswerMultipleChoice: checkAnswerMultipleChoice,
      isAnswerWritten: checkAnswerWritten,
    }
    const words = [...cards]

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
        })}
      />
      <InputChecked title="Верно - неверно" register={register('checkAnswerTrueFalse')} />
      <InputChecked title="Вопросы с выбором ответа" register={register('checkAnswerMultipleChoice')} />
      <InputChecked title="Письменные вопросы" register={register('checkAnswerWritten')} />

      <div className="flex justify-center">
        <ButtonControlFolder type="submit" color="text-primary" customPadding="px-5 md:px-11" isSmall>
          Начать
        </ButtonControlFolder>
      </div>
    </form>
  )
}
