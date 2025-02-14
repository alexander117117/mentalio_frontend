import React from 'react'
import { test } from 'src/shared/assets/images'
import { SiderMenu } from '../SiderMenu'
import { GiHamburgerMenu } from 'react-icons/gi'

interface SiderProps {
  toggleSider: () => void
}

export const SiderApp = ({ toggleSider }: SiderProps) => {
  return (
    <nav>
      <aside className={`w-[250px] xl:w-[285px] h-[100vh] bg-[#F6F6F6] pt-[33px] pl-[25px] pr-[15px] fixed z-[10]`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={test} alt="avatar" className="w-[24px] aspect-square object-cover rounded-full" />
            <span className="font-unbounded text-[1.25rem]">Alexander</span>
          </div>
          <div className="cursor-pointer" onClick={toggleSider}>
            <GiHamburgerMenu />
          </div>
        </div>

        <div className="mt-[23px]">
          <SiderMenu />
        </div>

        <p className="absolute bottom-[17px] left-[50%] translate-x-[-50%] text-siderGray">Mentalio Ltd.</p>
      </aside>
    </nav>
  )
}
