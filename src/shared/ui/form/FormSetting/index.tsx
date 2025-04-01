import { InputSetting } from '@/shared/ui/inputs/InputSetting'
import { ButtonSetting } from '@/shared/ui/buttons/ButtonSetting'

interface FormSettingProps {
  type: string
  value: string
}
export function FormSetting({ type, value }: FormSettingProps) {
  return (
    <form className="w-full flex flex-col gap-[10px]">
      <InputSetting type={type} value={value} />

      <ButtonSetting />
    </form>
  )
}
