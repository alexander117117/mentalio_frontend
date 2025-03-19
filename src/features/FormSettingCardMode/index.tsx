import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'

export function FormSettingCardMode() {
  return (
    <form className={formSettingLearning}>
      <InputChecked title={'Бесконечный режим'} nameInput="checkAnswerTrueFalse" />
      <InputChecked title={'Перемешать карточки'} nameInput="checkAnswerTrueFalse" />
      <InputChecked title={'Изучать избранное'} nameInput="checkAnswerTrueFalse" />

      <div className="flex justify-center">
        <ButtonControlFolder type="submit" color={'text-primary'} customPadding="px-5 md:px-11" isSmall={true}>
          Начать
        </ButtonControlFolder>
      </div>
    </form>
  )
}
