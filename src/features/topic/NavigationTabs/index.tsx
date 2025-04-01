import { FormSettingCardMode } from '@/features/topic/NavigationTabs/ui/FormSettingCardMode'
import { FormSettingMemorization } from '@/features/topic/NavigationTabs/ui/FormSettingMemorization'
import { FormSettingTest } from '@/features/topic/NavigationTabs/ui/FormSettingTest'
import { ButtonNavigationTab } from '@/features/topic/NavigationTabs/ui/ButtonNavigationTab'

export function NavigationTabs() {
  return (
    <div className="flex gap-3 sm:gap-5 justify-center mt-5">
      <ButtonNavigationTab ComponentForm={<FormSettingCardMode />} title="Настройте карточки">
        Карточки
      </ButtonNavigationTab>
      <ButtonNavigationTab ComponentForm={<FormSettingMemorization />} title="Настройте заучивание">
        Заучивание
      </ButtonNavigationTab>
      <ButtonNavigationTab ComponentForm={<FormSettingTest />} title="Настройте свой тест">
        Тест
      </ButtonNavigationTab>
    </div>
  )
}
