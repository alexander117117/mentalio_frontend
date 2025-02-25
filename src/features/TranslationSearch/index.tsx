import { InputTranslateSeach } from "@/shared/ui/inputs/InputTranslateSearch"
import { LabelTranslation } from "@/shared/ui/labels/LabelTranslation"
import {Panel} from "@/shared/ui/Panel"

export function TranslationSearch() {
  return (
    <Panel>
      <LabelTranslation>Введите слово:</LabelTranslation>
      <InputTranslateSeach type="text" placeholder="Введите слово"/>
    </Panel>
  )
}
