import { ButtonNavigationTab } from '@/shared/ui/buttons/ButtonNavigationTab'

export function NavigationTabs() {
  return (
    <div className="flex gap-3 sm:gap-5 justify-center mt-5">
      <ButtonNavigationTab typeModal={'card-mode'}>Карточки</ButtonNavigationTab>
      <ButtonNavigationTab typeModal={'memorization'}>Заучивание</ButtonNavigationTab>
      <ButtonNavigationTab typeModal={'test'}>Тест</ButtonNavigationTab>
    </div>
  )
}
