import { FAQ_ITEMS } from '@/shared/constants/settingSupportData'
import { Dropdown } from '@/widgets/Dropdown'

export function FAQSection() {
  return (
    <div className="flex flex-col gap-3">
      {FAQ_ITEMS.map((item, index) => (
        <Dropdown key={index} title={item.title} isPrimaryDropdown={false}>
          {item.content}
        </Dropdown>
      ))}
    </div>
  )
}
