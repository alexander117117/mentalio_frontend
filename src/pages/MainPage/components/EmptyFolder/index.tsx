import React from 'react'
import { sad_folders } from '@images'
import { ButtonAddFolderPlus } from '@/shared/ui/buttons/ButtonAddFolderPlus'

export const EmptyFolder = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex flex-col items-center">
          <span className="text-sm xs:text-lg lg:text-xl text-siderGray mb-[14px] 2xl:mb-4">
            У вас пока нету папок ...
          </span>
          <div className="relative">
            <div className="w-[127px] xs:w-[200px] lg:w-[250px] 2xl:w-[300px] h-[77px] xs:h-[110px] lg:h-[160px] 2xl:h-[190px] truncate">
              <img src={sad_folders} alt="" className="w-full h-full object-contain" />
            </div>
            <ButtonAddFolderPlus isBig={true} />
          </div>
        </div>
      </section>
    </>
  )
}
