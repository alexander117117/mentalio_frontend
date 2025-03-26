import { TitleSetting } from "@/shared/ui/titles/TitleSetting";
import { test } from "@/shared/assets/images";
import { Dropdown } from "@/widgets/Dropdown";
export function SettingAccountPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <TitleSetting>Аккаунт Mentalio</TitleSetting>

      <div className="text-center">
        <img src={test} alt="" className="w-[200px] aspect-square rounded-full object-cover mb-[10px]"/>
        <span className="text-3xl font-bold">Лев</span>
      </div>

      <div className="w-[90%] md:w-[650px]">
        <Dropdown>
          <input 
            type="text" 
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={'Лев'}
          />
        </Dropdown>
      </div>
    </div>
  )
}