import { happy_folders, sad_folders } from 'src/shared/assets/images'
import { Link } from 'react-router'
// import { Folder } from './UI/Folder'
import { ButtonAddFolderPlus } from '@/shared/ui/buttons/ButtonAddFolderPlus'
import { FoldersProps } from '@/widgets/ShowFolders/lib/types.ts'
// import { Swiper, SwiperSlide } from 'swiper/react';
import { FolderSlider } from '@/widgets/FolderSlider'
export const NonEmptyFolder = ({ files }: FoldersProps) => {
  return (
    <>
      <section className="w-full sm:w-[99%] flex items-center justify-center lg:justify-between gap-5">
        <div className="hidden lg:block">
          <h3 className="text-[32px] font-bold mb-[15px] whitespace-nowrap">Добавить папку</h3>

          <div className="w-[210px] h-[102px] rounded-[15px] bg-[#D1FFBAE5] flex items-center justify-center relative">
            <img src={happy_folders} alt="" className="w-[130px] h-[80px] object-contain" />
            <ButtonAddFolderPlus />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-[15px] xs:w-auto w-[80vw]">
            <h3 className="text-base sm:text-[32px] font-bold">Мои папки</h3>
            <Link
              to="/my-folders"
              className="inline-block py-0 sm:py-[12px] px-0 sm:px-[18px] sm:bg-[#001E02] rounded-[10px] text-[10px] sm:text-base text-[#6B6868] sm:text-[#fff]"
            >
              Смотреть все
            </Link>
          </div>

          <FolderSlider files={files} />

          <div className="block lg:hidden w-fit relative mt-[15px] mx-auto">
            <div className="w-[127px] sm:w-[200px] h-[77px] xs:h-[110px] truncate">
              <img src={sad_folders} alt="" className="w-full h-full object-contain" />
            </div>
            <ButtonAddFolderPlus />
          </div>
        </div>
      </section>
    </>
  )
}
