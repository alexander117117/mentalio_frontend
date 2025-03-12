import { ButtonNavigationTab } from '@/shared/ui/buttons/ButtonNavigationTab'

export function NavigationTabs() {
  return (
    <div className="flex gap-3 sm:gap-5 justify-center mt-5">
      <ButtonNavigationTab>Карточки</ButtonNavigationTab>
      <ButtonNavigationTab link={'/learning'}>Заучивание</ButtonNavigationTab>
      <ButtonNavigationTab>Тест</ButtonNavigationTab>
    </div>
  )
}
