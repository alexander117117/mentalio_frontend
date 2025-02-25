import { ButtonAddWordTranslate } from "@/shared/ui/buttons/ButtonAddWordTranslate";
import { LabelTranslation } from "@/shared/ui/labels/LabelTranslation";
import { Panel } from "@/shared/ui/Panel";
import { SimilarTerms } from "@/widgets/SimilarTerms";
import style from "./index.module.css"
export function Translation() {
  return (
    <Panel>
      <LabelTranslation>Переводы:</LabelTranslation>

      <div className={style.translation_group}>
        <div className='flex gap-2'>
          <input type="text" className="w-[94px] bg-popup rounded-[5px] py-[3px] px-[8px] outline-none text-xs border border-[#272727] h-[24px]" placeholder='Введите слово'/>
          <button className="h-[24px] aspect-square border border-[#272727] rounded-[5px] text-primary text-2xl leading-[1rem] font-light">+</button>
        </div>

        <SimilarTerms />

      </div>
      <ButtonAddWordTranslate>Добавить</ButtonAddWordTranslate>
    </Panel>
  )
}