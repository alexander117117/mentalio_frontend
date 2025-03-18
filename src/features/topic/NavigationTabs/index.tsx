import { ButtonNavigationTab } from '@/features/topic/NavigationTabs/ui/ButtonNavigationTab'

export function NavigationTabs() {
  return (
    <div className="flex gap-3 sm:gap-5 justify-center mt-5">
      <ButtonNavigationTab>Карточки</ButtonNavigationTab>
      <ButtonNavigationTab>Заучивание</ButtonNavigationTab>
      <ButtonNavigationTab>Тест</ButtonNavigationTab>
    </div>
  )
}
