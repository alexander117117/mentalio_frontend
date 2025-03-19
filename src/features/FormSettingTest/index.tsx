import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'
import { InputQuantity } from '@/shared/ui/inputs/InputQuantity'

export function FormSettingTest() {
  return (
    <form className={formSettingLearning}>
      <InputQuantity />
      <InputChecked title={'Верно - неверно'} nameInput="checkAnswerTrueFalse" />
      <InputChecked title={'Вопросы с выбором ответа'} nameInput="checkAnswerMultipleChoice" />
      <InputChecked title={'Письменные вопросы'} nameInput="checkAnswerWritten" />

      <div className="flex justify-center">
        <ButtonControlFolder type="submit" color={'text-primary'} customPadding="px-5 md:px-11" isSmall={true}>
          Начать тест
        </ButtonControlFolder>
      </div>
    </form>
  )
}
