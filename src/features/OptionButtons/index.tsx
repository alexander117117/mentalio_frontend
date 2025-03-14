import { ButtonLearning } from '@/shared/ui/buttons/ButtonLearning'

interface OptionButtonsProps {
  data: string[]
}
export function OptionButtons({ data }: OptionButtonsProps) {
  return (
    <div className="mt-24 sm:mt-[126px] grid grid-cols-2 gap-x-[10px] sm:gap-x-5 gap-y-[10px]">
      {data.map((item, index) => (
        <ButtonLearning key={index}>{item}</ButtonLearning>
      ))}
    </div>
  )
}
