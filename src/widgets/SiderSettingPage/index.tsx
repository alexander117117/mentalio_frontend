import { SiderSettingApp } from "./components/SiderSettingApp";

export function SiderSettingPage() {
  return (
    <div className="hidden md:block bg-[#E7E7E7] h-screen">
      <div className={`w-[250px] xl:w-[285px]`}>
        <SiderSettingApp />
      </div>
    </div>
  )
}