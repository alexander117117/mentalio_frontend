import { formSettingLearning } from '@/shared/lib/classNames'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { InputChecked } from '@/shared/ui/inputs/InputChecked'
import { InputQuantity } from '@/shared/ui/inputs/InputQuantity'
import { useNavigate } from 'react-router'

export function FormSettingMemorization() {
  const navigate = useNavigate()
  return (
    <form className={formSettingLearning}>
      <InputQuantity />
      <InputChecked title={'Изучать избранное'} nameInput="checkAnswerTrueFalse" />

      <div className="flex justify-center">
        <ButtonControlFolder
          type="submit"
          color={'text-primary'}
          customPadding="px-5 md:px-11"
          isSmall={true}
          onClick={() => {
            navigate('/memorization')
          }}
        >
          Начать
        </ButtonControlFolder>
      </div>
    </form>
  )
}
