import { ButtonAddWordTranslate } from "@/shared/ui/buttons/ButtonAddWordTranslate";
import { LabelTranslation } from "@/shared/ui/labels/LabelTranslation";
import { Panel } from "@/shared/ui/Panel";
import { SimilarTerms } from "@/widgets/SimilarTerms";
import style from "./index.module.css"
import { LanguageSelector } from "@/widgets/LanguageSelector";
import { ButtonAddFile } from "@/shared/ui/buttons/ButtonAddFile";
import { InputTranslateSearch } from "@/shared/ui/inputs/InputTranslateSearch";
export function Translation() {
  return (
    <div className="mt-[10px]">
      <Panel>
        <LanguageSelector />
        <LabelTranslation>Переводы:</LabelTranslation>
  
        <div className={style.translation_group}>
          <div className='flex gap-2'>
            <InputTranslateSearch type="text" placeholder="Введите слово" isSmall={true}/>

            <button className="h-[35px] sm:h-[24px] aspect-square border border-[#272727] rounded-[5px] text-primary text-2xl leading-[1rem] font-light">+</button>
          </div>
  
          <SimilarTerms />
  
        </div>
        <div className="flex items-center gap-3 mt-3 sm:mt-5">
          <ButtonAddWordTranslate>Добавить</ButtonAddWordTranslate>
          <ButtonAddFile />
        </div>
      </Panel>
    </div>
  )
}