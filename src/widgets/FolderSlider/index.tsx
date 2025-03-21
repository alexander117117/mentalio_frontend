import { Swiper, SwiperSlide } from 'swiper/react';
import { FoldersProps } from '@/widgets/ShowFolders/lib/types.ts'
import { Folder } from '../ShowFolders/component/NonEmptyFolder/UI/Folder';

export function FolderSlider({ files }: FoldersProps) {
  return (
    <div
      className="w-[320px] xs:w-[576px] sm:w-[730px] flex items-center gap-[20px]"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 3.2 ,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 3.2 ,
            spaceBetween: 15
          },
          768: {
            slidesPerView: files?.length ? (files?.length < 2 ? 1 : files?.length < 3 ? 2 : 2.2) : 1,
            spaceBetween: 20
          }
        }}
        slidesPerView={files?.length ? (files?.length < 2 ? 1 : files?.length < 3 ? 2 : 2.2) : 1}
        spaceBetween={20}
        className="mySwiper"
      >
        {files?.map((file) => 
          <SwiperSlide key={file.id}>
            <Folder dataFolder={file} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}