import { Translation } from '@/features/Translation';
import {TranslationSearch} from '@/features/TranslationSearch';
import { useParams } from 'react-router-dom';
import { edit_icon, favorite_word_icon, cross_icon } from '@/shared/assets/images';

export function FolderTopicPage() {
  const { idFolder, idTopic } = useParams();
  return (
    <div>
      <h1 className="text-center font-unbounded text-5xl font-bold mb-5">Термины B2</h1>
      
      <TranslationSearch />
      <br />
      <Translation />

      <div className="flex gap-5 justify-center mt-5">
        <button className="bg-zinc-900 text-white hover:bg-zinc-800 px-[24px] py-[8px] rounded-[10px]">
          Карточки
        </button>
        <button className="bg-zinc-900 text-white hover:bg-zinc-800 px-[24px] py-[8px] rounded-[10px]">
          Заучивание
        </button>
        <button className="bg-zinc-900 text-white hover:bg-zinc-800 px-[24px] py-[8px] rounded-[10px]">
          Тест
        </button>
      </div>

      <div className="mt-10">
        <div className="p-[15px] flex justify-between w-full bg-white rounded-[12px] border-2 border-[#e1e1e1]">
          <div className="flex flex-col gap-2">
            <span>Articulación</span>
            <span>Сустав</span>
          </div>

          <div className="p-[12px] border border-dashed border-[#e1e1e1] flex items-center gap-2">
            <img src={edit_icon} alt="" />
            <img src={favorite_word_icon} alt="" />
            <img src={cross_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
