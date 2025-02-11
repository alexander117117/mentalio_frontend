import * as React from 'react'
import { sider1, sider2, sider3 } from '@images'

import { SiderMenuItem } from '../SiderMenuItem/index.tsx'
import { SiderMenuCategory } from '../SiderMenuCategory/index.tsx'

import { menuData } from './const.ts'

export const SiderMenu = () => {
  return (
    <>
      {/* Основное */}
      <SiderMenuCategory category={'Основное'} image={sider1} />

      {/* Подкатегории Основное*/}
      <div className="flex flex-col gap-[10px] mb-[23px]">
        {menuData.slice(0, 5).map((item: any, index: number) => (
          <SiderMenuItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            image={item.image}
            imageActive={item.imageActive}
            inDevelopment={item.inDevelopment}
          />
        ))}
      </div>

      <SiderMenuCategory category={'Результаты'} image={sider2} />

      <div className="flex flex-col gap-[10px] mb-[23px]">
        {menuData.slice(5, 7).map((item: any, index: number) => (
          <SiderMenuItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
            image={item.image}
            imageActive={item.imageActive}
            inDevelopment={item.inDevelopment}
          />
        ))}
      </div>

      {/* Остальное */}
      <SiderMenuCategory category={'Остальное'} image={sider3} />

      {/* Подкатегории Остальное*/}
      <div className="flex flex-col gap-[10px]">
        {menuData.slice(7).map((item, index) => (
          <SiderMenuItem key={index} title={item.title} subtitle={item.subtitle} link={item.link} image={item.image} />
        ))}
      </div>
    </>
  )
}
